
const { expect } = require('chai');


describe('Voting', function () {
it('full flow', async function () {
const [admin, voter1, voter2] = await ethers.getSigners();
const Voting = await ethers.getContractFactory('Voting');
const voting = await Voting.deploy();
await voting.deployed();


const txCreate = await voting.createElection('Test');
await txCreate.wait();


const txAdd1 = await voting.addCandidate(0, 'Alice');
await txAdd1.wait();
const txAdd2 = await voting.addCandidate(0, 'Bob');
await txAdd2.wait();


const txReg1 = await voting.registerVoter(0, voter1.address);
await txReg1.wait();
const txReg2 = await voting.registerVoter(0, voter2.address);
await txReg2.wait();


const txOpen = await voting.openElection(0);
await txOpen.wait();


const votingAsVoter1 = voting.connect(voter1);
const txVote1 = await votingAsVoter1.vote(0, 0);
await txVote1.wait();


const votingAsVoter2 = voting.connect(voter2);
const txVote2 = await votingAsVoter2.vote(0, 1);
await txVote2.wait();


const candidate0 = await voting.getCandidate(0, 0);
const candidate1 = await voting.getCandidate(0, 1);


expect(candidate0[2].toNumber()).to.equal(1);
expect(candidate1[2].toNumber()).to.equal(1);
const total = await voting.getTotalVotes(0);
expect(total.toNumber()).to.equal(2);
});
});
