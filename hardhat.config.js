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
      url: "https://rinkeby.infura.io/v3/b9de070195cb4c898b9fa784730e069d",
      accounts: [priv_key]
    },
    goerli: {
      url: "https://goerli.infura.io/v3/b9de070195cb4c898b9fa784730e069d",
      accounts: [priv_key]
    },
    mainnet: {
      url: "https://mainnet.infura.io/v3/b9de070195cb4c898b9fa784730e069d",
      accounts: [priv_key]
    },    
  },  
  etherscan: {
    apiKey: "E1P1ICRFRNE694JDKUQ54MVRK6X5H1R4V4"
  }
};
