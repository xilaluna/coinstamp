import React from "react";

const Copyright = () => {
  return (
    <p className="text-center ">
      {"Copyright © "}
      {new Date().getFullYear()}
      {" CoinStamp"}
    </p>
  );
};

const Footer = () => {
  return (
    <footer className="page-container mt-auto bg-gray-300 py-5">
      <Copyright />
    </footer>
  );
};

export default Footer;
