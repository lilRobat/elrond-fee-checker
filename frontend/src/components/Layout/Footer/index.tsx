import React from "react";
import { ReactComponent as HeartIcon } from "../../../assets/img/heart.svg";

const Footer = () => {
  return (
    <footer className="text-center mt-2 mb-3">
      <div>
        <a
          {...{
            target: "_blank",
          }}
          className="d-flex align-items-center"
          href="https://twitter.com/nazevice"
        >
          Made by Naze Vice.
        </a>
      </div>
    </footer>
  );
};

export default Footer;
