// scripts/upgrade_box.js
const { ethers, upgrades } = require("hardhat");

const PROXY = "0x2C6Ba94a0946Ba7486683F3aeA1564c5F15669E0";

async function main() {
    const BoxV2 = await ethers.getContractFactory("BoxV2");
    console.log("Upgrading Box...");
    await upgrades.upgradeProxy(PROXY, BoxV2);
    console.log("Box upgraded");
}

main();