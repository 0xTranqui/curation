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
    goerli: {0x6422Bf82Ab27F121a043d6DE88b55FA39e2ea292
      url: "https://goerli.infura.io/v3/b9de070195cb4c898b9fa784730e069d",
      accounts: [priv_key]
    },
    mainnet: {
      url: "https://mainnet.infura.io/v3/b9de070195cb4c898b9fa784730e069d",
      accounts: [priv_key]
    },    
  },  
  etherscan: {
    apiKey: ""
  }
};
