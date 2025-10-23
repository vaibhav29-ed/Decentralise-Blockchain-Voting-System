pragma solidity ^0.8.18;
return id;
}


function addCandidate(uint _electionId, string memory _candidateName) external onlyAdmin {
Election storage e = elections[_electionId];
require(e.exists);
uint cid = e.candidateCount++;
e.candidates[cid] = Candidate({id: cid, name: _candidateName, voteCount: 0});
}


function registerVoter(uint _electionId, address _voter) external onlyAdmin {
Election storage e = elections[_electionId];
require(e.exists);
e.voterRegistered[_voter] = true;
}


function openElection(uint _electionId) external onlyAdmin {
Election storage e = elections[_electionId];
require(e.exists);
e.open = true;
}


function closeElection(uint _electionId) external onlyAdmin {
Election storage e = elections[_electionId];
require(e.exists);
e.open = false;
}


function vote(uint _electionId, uint _candidateId) external {
Election storage e = elections[_electionId];
require(e.exists);
require(e.open);
require(e.voterRegistered[msg.sender]);
require(!e.voted[msg.sender]);
Candidate storage c = e.candidates[_candidateId];
c.voteCount += 1;
e.voted[msg.sender] = true;
e.totalVotes += 1;
}


function getElectionName(uint _electionId) external view returns (string memory) {
return elections[_electionId].name;
}


function getCandidate(uint _electionId, uint _candidateId) external view returns (uint, string memory, uint) {
Candidate storage c = elections[_electionId].candidates[_candidateId];
return (c.id, c.name, c.voteCount);
}


function getCandidateCount(uint _electionId) external view returns (uint) {
return elections[_electionId].candidateCount;
}


function isVoterRegistered(uint _electionId, address _voter) external view returns (bool) {
return elections[_electionId].voterRegistered[_voter];
}


function hasVoted(uint _electionId, address _voter) external view returns (bool) {
return elections[_electionId].voted[_voter];
}


function getTotalVotes(uint _electionId) external view returns (uint) {
return elections[_electionId].totalVotes;
}
}
