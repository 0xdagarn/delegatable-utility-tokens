const hre = require("hardhat");

async function main() {
  const ERC721 = await hre.ethers.getContractFactory("ERC721Mock");
  const erc721 = await ERC721.deploy("PolyJuice Labs", "POL");

  const DUT = await hre.ethers.getContractFactory("ERC6884");
  const dut = await DUT.deploy(erc721.address);

  await dut.deployed();

  console.log(erc721.address);
  console.log(dut.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
