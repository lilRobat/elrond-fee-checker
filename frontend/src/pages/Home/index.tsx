import * as React from "react";
import { Link } from "react-router-dom";
import { dAppName } from "config";
import { routeNames } from "routes";

const Home = () => {
  return (
    <div className="d-flex flex-fill align-items-center container">
      <div className="row w-100">
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
                <input></input> <br />
                <a className="btn btn-primary mt-3">Search</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
