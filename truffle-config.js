const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    bsc_testnet: {
      provider: () => new HDWalletProvider(process.env.MNENOMIC, "https://data-seed-prebsc-1-s1.binance.org:8545"),
      network_id: 97
    },
    bsc: {
      provider: () => new HDWalletProvider(process.env.MNENOMIC, "https://bsc-dataseed1.binance.org"),
      network_id: 56
    },
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    bscscan: process.env.BSCSCAN_API_KEY
  },
  compilers: {
    solc: {
      version: "0.6.12",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }      
    }
  }
}