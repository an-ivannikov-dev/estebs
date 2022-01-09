//require('dotenv').config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const privateKey = [
  //process.env.PRIVATE_KEY
];

module.exports = {
  plugins: ["truffle-plugin-verify"],
  api_keys: {
    etherscan: "", //Replace with your etherscan key for verification
  },
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 8545, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    },
    mainnet: {
      provider: () =>
        new HDWalletProvider(
          privateKey,
          `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}` //Replace it with the network RPC provider. Example provided is for infura url for ethereum
        ),
      network_id: 1, // Update the Chain ID
      confirmations: 2, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    },
  },

  // Configure your compilers
  contracts_directory: './contracts',
  contracts_build_directory: './build',
  compilers: {
    solc: {
      version: './node_modules/solc',
      settings: {
        optimizer: {
          enabled: true,
          runs: 999999,
        },
        evmVersion: 'istanbul',
        //outputType: 'all',
        outputSelection: {
          '*': {
            '*': [
              'evm.bytecode.object',
              'evm.deployedBytecode.object',
              'abi',
              'evm.bytecode.sourceMap',
              'evm.deployedBytecode.sourceMap',
              'metadata'
            ],
            '': ['ast']
          }
        },
      }
    }
  },

  mocha: {
    timeout: 12000,
    useColors: true,
  },
};
