const hre = require("hardhat");

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const amount = hre.ethers.parseEther("10000000");

  const erc20Token = await hre.ethers.deployContract("ERC20Token", [amount]);
  await erc20Token.waitForDeployment();
  console.log("The erc20 token address is:", erc20Token.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
