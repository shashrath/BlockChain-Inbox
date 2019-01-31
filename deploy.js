const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface , bytecode} =  require('./compile');

const provider = new HDWalletProvider('absurd limb boost hybrid arch fringe slim surround sample face gentle stay',
                        'https://rinkeby.infura.io/v3/50ddf2dbc47445289121492c802aae7a');

const web3 = new Web3(provider);
