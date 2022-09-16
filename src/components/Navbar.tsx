import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <header className="container-page border-color flex flex-row border-b py-5 text-lg">
      <Link href={"/"}>
        <a className="hover:text-blue-600">CoinStamp</a>
      </Link>
      <nav className="ml-auto flex space-x-5">
        <Link href={"/create"}>
          <a className="hover:text-blue-600">Create</a>
        </Link>
        <Link href={"/rates"}>
          <a className="hover:text-blue-600">Rates</a>
        </Link>
        <Link href={"/cart"}>
          <a className="hover:text-blue-600">Cart</a>
        </Link>
        <Link href={"/order"}>
          <a className="hover:text-blue-600">Order</a>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
