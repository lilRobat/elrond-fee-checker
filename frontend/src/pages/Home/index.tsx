import React, { useState } from "react";
import { Link } from "react-router-dom";
import { dAppName } from "config";
import { routeNames } from "routes";
/* eslint-disable */
const fetch = require("node-fetch");

const Home = () => {
  const [wallet, setWallet] = useState("");
  const [transactions, setTransactions] = useState("⚡");
  const [fee, setFee] = useState("⚡");
  const [avgFee, setAvgFee] = useState("⚡");
  const [feeUSD, setFeeUSD] = useState("⚡");
  const fetchGas = async () => {
    const response = await fetch("/gas-fee", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({wallet_hash: wallet})
  })
    const data = await response.json();
    console.log(data);
    setTransactions(data.transactions)
    setFee(data.fee)
    setAvgFee(data.avgFee)
    setFeeUSD(data.egldPrice)
  };
  return (
    <div className="d-flex flex-fill align-items-center container">
      <div className="row w-100">
        <h1>
          You've spent {fee} egld on gas. Right now, that's {feeUSD}.
          <br />You send {transactions} transactions, with an average gas fee of {avgFee} egld.
        </h1>
        <div className="col-12 col-md-8 col-lg-5 mx-auto">
          <div className="card shadow-sm rounded p-4 border-0">
            <div className="card-body text-center">
              <h2 className="mb-3" data-testid="title">
                {dAppName}
              </h2>

              <p className="mb-3">
                Use this app to check your gas fees.
                <br /> Login using your Elrond wallet.
              </p>

              <Link
                to={routeNames.unlock}
                className="btn btn-primary mt-3"
                data-testid="loginBtn"
              >
                Login
              </Link>
              <p className="mb-3">
                or paste your wallet address here:
              </p>
              <div>
                <input onChange={(e) => setWallet(e.target.value)}></input> <br />
                <a onClick={() => fetchGas()} className="btn btn-primary mt-3">Search</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
