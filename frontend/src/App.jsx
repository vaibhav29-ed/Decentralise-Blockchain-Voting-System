import React, { useEffect, useState } from 'react';
import AdminDashboard from './components/AdminDashboard';
import VoterView from './components/VoterView';
import { ethers } from 'ethers';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from './config';


export default function App() {
const [provider, setProvider] = useState(null);
const [signer, setSigner] = useState(null);
const [contract, setContract] = useState(null);


useEffect(() => {
if (window.ethereum) {
const p = new ethers.providers.Web3Provider(window.ethereum);
setProvider(p);
p.send('eth_requestAccounts', []).then(() => {
const s = p.getSigner();
setSigner(s);
const c = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, s);
setContract(c);
});
}
}, []);


return (
<div>
<h1>DecentraVote</h1>
<AdminDashboard contract={contract} />
<VoterView contract={contract} />
</div>
);
}
