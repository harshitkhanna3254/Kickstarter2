const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')

const compiledFactory = require('./build/CampaignFactory.json')

const provider = new HDWalletProvider(
    'various mouse reject swap hobby miracle soul crack quote morning plate explain',
    'https://rinkeby.infura.io/v3/aa7d71fbdb0a4ad883452f3a9ec2e8b8'
)

const web3 = new Web3(provider);//Now this instance of web3 is completely enabled for the Rinkeby n/w.

const deploy = async () => {

  const accounts = await web3.eth.getAccounts();
    console.log("Attempting to deploy from account -> " ,accounts[0])
   const inbox = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
            .deploy({data : compiledFactory.bytecode})
            .send({from : accounts[0], gas : 1000000})

    console.log("The Contract was deployed to ", inbox.options.address)

}

deploy();

