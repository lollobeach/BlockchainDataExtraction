require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.g.alchemy.com/v2/ISHV03DLlGo2K1-dqE6EnsyrP2GF44Gt",
        // url: "https://eth-sepolia.g.alchemy.com/v2/6mnvPmDfijyOL2xG05-M6lkoYZwU_d9X",
        blockNumber: 12427648,
        // blockNumber: 5713214,
      },
      chainId: 1
      // chainId: 11155111
    }
  },
  solidity: "0.8.25",
};
