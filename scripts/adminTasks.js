async function main() {
const address = process.argv[2];
const Voting = await ethers.getContractFactory('Voting');
const voting = await Voting.attach(address);
const tx1 = await voting.createElection('General Election');
await tx1.wait();
const tx2 = await voting.addCandidate(0, 'Alice');
await tx2.wait();
const tx3 = await voting.addCandidate(0, 'Bob');
await tx3.wait();
console.log('setup done');
}


main().catch((error) => {
console.error(error);
process.exitCode = 1;
});
