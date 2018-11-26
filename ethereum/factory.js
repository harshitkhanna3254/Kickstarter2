import web3 from './web3.js';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x2dd0dE58F34Ef52E6C0cb243E402dF370ba946A4'
);

export default instance;