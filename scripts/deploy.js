async function main() {
const [deployer] = await ethers.getSigners();
const Voting = await ethers.getContractFactory('Voting');
const voting = await Voting.deploy();
await voting.deployed();
console.log(voting.address);
}


main().catch((error) => {
console.error(error);
process.exitCode = 1;
});
