// TO ACCESS YOUR ETH MNEMONIC: export ethereum_mnemonic="candy maple cake...."
const mnemonic = process.env.ethereum_mnemonic;
// init the provider for our blockchain network
const HDWalletProvider = require("truffle-hdwallet-provider");
require('babel-register');
require('babel-polyfill');

module.exports = {
    build: "npm run dev",
    networks: {
        development: {
            host: "127.0.0.1",
            port: 9545,
            network_id: "*" // Match any network id
        },
        ropsten: {
                provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"),
                network_id: 3
        },
        test: {
             provider: function() {
              return new HDWalletProvider(mnemonic, "http://127.0.0.1:8545/");
            },
            network_id: '*',
        },
        // live: {
        //     host: "178.25.19.88", // Random IP for example purposes (do not use)
        //     port: 80,
        //     network_id: 1,        // Ethereum public network
            // optional config values:
            // gas
            // gasPrice
            // from - default address to use for any transaction Truffle makes during migrations
            // provider - web3 provider instance Truffle should use to talk to the Ethereum network.
            //          - function that returns a web3 provider instance (see below.)
            //          - if specified, host and port are ignored.
        // }
    }
    // solc: {          // to activate the solidity compiler optimization params for live
    //   optimizer: {
    //         enabled: true,
    //         runs: 200
    //     }   
    // }
    package_name: "adamli_erc20_token"
    version: "0.0.0"
    description: "Our implementation of the erc20 token."
    authors: ["Adam Li"]
    keywords: [  
            "ethereum", 
            "erc20",
            "erctoken",
        ]
    license: "MIT",
    // dependencies: {}
};
