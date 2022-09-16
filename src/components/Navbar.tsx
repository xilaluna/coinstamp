import Link from "next/link";

const Navbar = () => {
  return (
    <header className="page-container border-color flex flex-row border-b py-5">
      <Link href={"/"}>
        <a>CoinStamp</a>
      </Link>
      <nav className="ml-auto">
        <ul className="flex space-x-5">
          <li>
            <Link href={"/new"}>
              <a>New Stamp</a>
            </Link>
          </li>
          <li>
            <Link href={"/rates"}>
              <a>Rates</a>
            </Link>
          </li>
          <li>
            <Link href={"/cart"}>
              <a>Cart</a>
            </Link>
          </li>
          <li>
            <Link href={"/order"}>
              <a>Order</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
