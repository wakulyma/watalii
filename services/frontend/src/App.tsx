import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import MyWallet from "./components/WalletComponent/Wallet";
import SetBudget from "./components/WalletComponent/SetBudget";
import MyWalletAvailableBalance from "./components/WalletComponent/MyWalletAvailableBalance";

function App() {
  return (
    <>
      <Routes>
        <Route path="/wallet" element={<MyWallet />} />
        <Route path="*" element={<MyWallet />} />
        <Route path="/balance" element={<MyWalletAvailableBalance />} />
        <Route path="/budget" element={<SetBudget />} />
      </Routes>
    </>
  );
}

export default App;
