import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="page-container py-5">
      <Link href={"/"}>
        <a>CoinStamp</a>
      </Link>
    </header>
  );
};

export default Navbar;
