import Web3 from 'web3';

let web3;
if(typeof window !== 'undefined' && window.web3 !== 'undefined') {
    // If we are on browser and metamask is running
    web3 = new Web3(window.web3.currentProvider);
} else {
    //We are on server *OR* user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/aa7d71fbdb0a4ad883452f3a9ec2e8b8'
    );
    web3 = new Web3(provider);
}


export default web3;