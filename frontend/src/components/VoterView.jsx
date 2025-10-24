import { useEffect, useState } from "react";
import { ethers } from "ethers";
import Voting from "../artifacts/contracts/Voting.sol/Voting.json";

export default function VotingView() {
  const [candidates, setCandidates] = useState([]);
  const [winner, setWinner] = useState("");
  const [contract, setContract] = useState(null);
  const [address, setAddress] = useState("");

  useEffect(() => {
    async function load() {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
      const voting = new ethers.Contract(contractAddress, Voting.abi, signer);
      setContract(voting);
      setAddress(await signer.getAddress());
      const data = await voting.getAllVotesOfCandidates();
      setCandidates(data);
    }
    load();
  }, []);

  async function vote(name) {
    await contract.vote(name);
    const data = await contract.getAllVotesOfCandidates();
    setCandidates(data);
  }

  async function declareWinner() {
    const winnerName = await contract.winnerName();
    setWinner(winnerName);
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-6">Blockchain Voting DApp</h1>
      <p className="text-sm mb-4 text-gray-500">Connected as {address}</p>
      <div classNa

