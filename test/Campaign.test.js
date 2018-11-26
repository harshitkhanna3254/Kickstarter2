const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

// require('events').EventEmitter.defaultMaxListeners = 15;


const compiledCampaign = require('../ethereum/build/Campaign.json');
const compiledFactory = require('../ethereum/build/CampaignFactory.json');


let accounts;
let campaign;
let factory;
let campaignAddress;

beforeEach( async () => {

    accounts = await web3.eth.getAccounts();

    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
                        .deploy({data: compiledFactory.bytecode})
                        .send({from: accounts[0], gas: '1000000' })

    await factory.methods.createCampaign('100').send({
        from: accounts[0],
        gas: '1000000'
    })

    const addresses = await factory.methods.getDeployedCampaigns().call();
    campaignAddress = addresses[0];

   campaign = await new web3.eth.Contract(
                JSON.parse(compiledCampaign.interface),
                campaignAddress
                );

})


describe( 'Campaign Contract', () => {

    it( 'if campaign and factory contracts are deployed', () => {
        assert.ok(campaign.options.address);
        assert.ok(factory.options.address);
    })

    it('Caller is the manager', async () => {

        const manager = await campaign.methods.manager().call();
        assert.equal(accounts[0], manager);
    })

    it('Contributer gets added to the approvers array', async () => {
        await campaign.methods.contribute().send({
            value: '200',
            from: accounts[0]
        })

        const isContributer = await campaign.methods.approvers(accounts[0]).call();

        assert.ok(isContributer);

    })

    it('Minimum value tied to a campaign', async () => {

        try{
            await campaign.methods.contribute().send({
                value: '10',
                from: accounts[0]
            })
            assert(false);   
        } catch(err){
            assert(err);
        }
    })

    it('Correct Request gets added to the requests array', async () => {
        
        await campaign.methods.createRequest('Buy batteries', '100', accounts[1]).send({
            from:accounts[0],
            gas:'1000000'
        })

        const req = await campaign.methods.requests(0).call();

        assert.equal('Buy batteries', req.description);

    })

    it('Processes Requests', async () => {
        await campaign.methods.contribute().send({
            value: web3.utils.toWei('10', 'ether'),
            from: accounts[0]
        })

        await campaign.methods.createRequest('A', web3.utils.toWei('5', 'ether'), accounts[1])
                              .send({
                                  from: accounts[0],
                                  gas: '1000000'
                              })

        await campaign.methods.approveRequest(0).send({
            from: accounts[0],
            gas: '1000000'
        })

        await campaign.methods.finalizeRequest(0).send({
            from: accounts[0],
            gas: '1000000'
        })

        let balance = await web3.eth.getBalance(accounts[1]);
        balance = web3.utils.fromWei(balance, 'ether');
        balance = parseFloat(balance);
        console.log(balance);
        assert(balance > 104);

    })


})

