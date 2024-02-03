require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-ethers");
// require("@nomiclabs/hardhat-etherscan");

const { PRIVATE_KEY, BSC_API_KEY } = process.env;

module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },

  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},

    bsctestnet: {
      url: "https://data-seed-prebsc-1-s3.binance.org:8545",
      chainId: 97,
      accounts: [process.env.PRIVATE_KEY],
    },

    bscmainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      accounts: [process.env.PRIVATE_KEY],
    },

    mumbai: {
      url: 'https://polygon-mumbai.infura.io/v3/fb151342a52b4520ad115c8594b21a5e',
      accounts: [process.env.PRIVATE_KEY],
    },

    matic: {
      url: 'https://polygon-rpc.com/',
      accounts: [process.env.PRIVATE_KEY],
    },

    ethereum: {
      url: "https://mainnet.infura.io/v3/0839dc87b2a849528102d4eb97a57e1f",
      accounts: [process.env.PRIVATE_KEY]
    }
  },

  etherscan: {
      apiKey: BSC_API_KEY,
  },

  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },

  mocha: {
    timeout: 4000000,
  },
};

