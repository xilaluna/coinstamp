import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <header className="border-color sticky top-0 z-10 border-b backdrop-blur-md">
      <div className="page-width flex flex-row py-5">
        <Link href={"/"}>
          <a className="hover:text-indigo-500">CoinStamp</a>
        </Link>
        <nav className="ml-auto flex space-x-5">
          <Link href={"/create"}>
            <a className="hover:text-indigo-500">Create</a>
          </Link>
          <Link href={"/rates"}>
            <a className="hover:text-indigo-500">Rates</a>
          </Link>
          <Link href={"/cart"}>
            <a className="hover:text-indigo-500">Cart</a>
          </Link>
          <Link href={"/order"}>
            <a className="hover:text-indigo-500">Order</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
