# 🗳️ Blockchain Voting System DApp

A **decentralized voting application** built using **Solidity**, **Hardhat**, **Ethers.js**, and **React (Vite)**.  
This project ensures transparent, tamper-proof, and verifiable elections on the **Ethereum blockchain** — eliminating centralized control and guaranteeing trust in the voting process.

---

## 🚀 Project Overview

Traditional voting systems rely on central authorities, making them vulnerable to manipulation, data loss, or privacy breaches.  
This project leverages blockchain technology to create a **secure, transparent, and auditable voting system**.

### 🎯 Core Objective
To develop a **trustless voting mechanism** where:
- Each voter can vote **only once**.
- Votes are **stored immutably** on-chain.
- The **winner** is calculated automatically through a smart contract.
- The entire process is **verifiable** by anyone.

---

## 🧩 Technologies Used

| Technology | Purpose |
|-------------|----------|
| **Solidity** | Smart contract language used to define voting logic on Ethereum |
| **Hardhat** | Ethereum development environment for compiling, testing, and deploying contracts |
| **Ethers.js** | JavaScript library for connecting the frontend to the Ethereum blockchain |
| **React (Vite)** | Frontend framework to create an interactive user interface |
| **MetaMask** | Browser wallet to sign transactions and interact with the blockchain |
| **Vercel** | Hosting platform for deploying the frontend DApp |
| **Alchemy / Infura** | RPC node provider to connect with Ethereum Sepolia Testnet |

---

## 📁 Project Structure

blockchain-voting/
├── contracts/
│ └── Voting.sol # Solidity smart contract defining voting logic
├── scripts/
│ └── deploy.js # Deployment script to deploy the contract to blockchain
├── frontend/
│ ├── src/
│ │ ├── VotingView.jsx # Main React component for interacting with the smart contract
│ │ ├── App.jsx # Entry point rendering the voting interface
│ │ └── main.jsx # React root configuration
│ ├── package.json # React dependencies and scripts
│ ├── vite.config.js # Vite configuration for building the app
│ └── index.html # Root HTML file
├── hardhat.config.js # Hardhat network & compiler configuration
├── .env # Contains private keys & RPC URL (never commit this)
├── package.json # Node dependencies
└── README.md # Project documentation

---

## 💡 How It Works

### 1️⃣ **Smart Contract Logic (`Voting.sol`)**
- Maintains a list of candidates.
- Stores votes for each candidate.
- Prevents double voting by tracking voter addresses.
- Computes the winner based on the highest vote count.

### 2️⃣ **Deployment Script (`deploy.js`)**
- Uses **Hardhat** and **Ethers.js** to deploy the contract to **Sepolia Testnet**.
- Logs the **deployed contract address**, which connects to the frontend.

### 3️⃣ **Frontend DApp (`VotingView.jsx`)**
- Connects to MetaMask wallet.
- Displays the list of candidates and their vote counts.
- Allows users to cast votes by signing a blockchain transaction.
- Shows the live winner once declared.

### 4️⃣ **MetaMask Integration**
- The frontend requests permission to access the user’s Ethereum wallet.
- Each vote triggers a **smart contract transaction** signed by the user.
- Gas fees (in Sepolia ETH) are required for transaction processing.

---

## ⚙️ Installation & Setup

### Clone the Repository
```bash
git clone https://github.com/<your-username>/blockchain-voting-system.git
cd blockchain-voting-system

<-- Created/Managed by @vaibhav29-ed (github).-->
