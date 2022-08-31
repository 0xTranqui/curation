require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan")
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */

const infura_key = process.env.INFURA_KEY
const priv_key = process.env.PRIVATE_KEY

module.exports = {
  solidity: {
    version: "0.8.13",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {
    },
    rinkeby: {
      url: "",
      accounts: [priv_key]
    },
    goerli: {
      url: "",
      accounts: [priv_key]
    },
    mainnet: {
      url: "",
      accounts: [priv_key]
    },    
  },  
  etherscan: {
    apiKey: ""
  }
};
