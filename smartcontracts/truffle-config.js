// require('dotenv').config();
// const { MNEMONIC, PROJECT_ID } = process.env;

const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = process.env.MNEMONIC;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    testnet: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777",
    },
    //  testnet: {
    //   provider: () => new HDWalletProvider(mnemonic, `https://goerli.infura.io/v3/2c19f9e710d54ec4b2157fb92bd6565e`),
    //   network_id: '5',
    //   gas: 4465030,
    //   gasPrice: 10000000000,
    //   skipDryRun: true
    // },
    // testnet: {
    //   provider: () => new HDWalletProvider(mnemonic, `https://data-seed-prebsc-1-s1.binance.org:8545`),
    //   network_id: 97,
    //   confirmations: 10,
    //   timeoutBlocks: 200,
    //   skipDryRun: true
    // },
    // bsc: {
    //   provider: () => new HDWalletProvider(mnemonic, `https://bsc-dataseed1.binance.org`),
    //   network_id: 56,
    //   confirmations: 10,
    //   timeoutBlocks: 200,
    //   skipDryRun: true
    // },
  },

  mocha: {
    timeout: 100000,
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: ">=0.7.0", // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    },
  },

  // db: {
  //   enabled: false,
  //   host: "127.0.0.1",
  //   adapter: {
  //     name: "sqlite",
  //     settings: {
  //       directory: ".db"
  //     }
  //   }
  // }
};
