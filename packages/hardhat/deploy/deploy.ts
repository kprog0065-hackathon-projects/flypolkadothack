import hre from "hardhat";

async function main() {
  // Deploy FlyToken
  const FlyToken = await hre.ethers.getContractFactory("FlyToken");
  const flyToken = await FlyToken.deploy();
  await flyToken.waitForDeployment();
  console.log("FlyToken deployed to:", await flyToken.getAddress());

  // Deploy FlyNFT - use the deployed FlyToken address
  const uri = "ipfs://bafybeiftiafkxczuj44atwyq4c2v43xmrmkbxttpq6d2wi7oj3e43mks4u/{id}.json";
  const FlyNFT = await hre.ethers.getContractFactory("FlyNFT");
  const flyNFT = await FlyNFT.deploy(uri, await flyToken.getAddress());
  await flyNFT.waitForDeployment();
  console.log("FlyNFT deployed to:", await flyNFT.getAddress());
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
