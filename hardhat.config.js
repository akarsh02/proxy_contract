require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");
const scanApiKey = process.env.BSCSCAN_API_KEY;
module.exports = {
    solidity: "0.8.10",
    networks: {
        bscTestnet: {
            url: "https://data-seed-prebsc-1-s1.binance.org:8545",
            chainId: 97,
            accounts: [
                "73d518331d36d757876a39d544cf3c66c5204b356a8d0d0603bc47b73597af14",
            ],
        },
    },
    etherscan: {
        apiKey: scanApiKey,
    },
};