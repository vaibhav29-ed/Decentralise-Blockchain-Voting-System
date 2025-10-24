import React, { useState } from 'react';


export default function AdminDashboard({ contract }) {
const [electionName, setElectionName] = useState('');
const [candidateName, setCandidateName] = useState('');
const [electionId, setElectionId] = useState('');
const [voterAddress, setVoterAddress] = useState('');


async function createElection() {
if (!contract) return;
const tx = await contract.createElection(electionName);
await tx.wait();
}


async function addCandidate() {
if (!contract) return;
const tx = await contract.addCandidate(Number(electionId), candidateName);
await tx.wait();
}


async function registerVoter() {
if (!contract) return;
const tx = await contract.registerVoter(Number(electionId), voterAddress);
await tx.wait();
}


async function openElection() {
if (!contract) return;
const tx = await contract.openElection(Number(electionId));
await tx.wait();
}


async function closeElection() {
if (!contract) return;
const tx = await contract.closeElection(Number(electionId));
await tx.wait();
}


return (
<div>
<h2>Admin</h2>
<input placeholder="Election name" value={electionName} onChange={(e) => setElectionName(e.target.value)} />
<button onClick={createElection}>Create</button>
<br />
<input placeholder="Election ID" value={electionId} onChange={(e) => setElectionId(e.target.value)} />
<input placeholder="Candidate name" value={candidateName} onChange={(e) => setCandidateName(e.target.value)} />
<button onClick={addCandidate}>Add Candidate</button>
<br />
<input placeholder="Voter address" value={voterAddress} onChange={(e) => setVoterAddress(e.target.value)} />
<button onClick={registerVote
