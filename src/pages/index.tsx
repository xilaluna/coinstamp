import type { NextPage } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import Layout from "@/components/Layout";

const Home: NextPage = () => {
  return (
    <Layout
      heading="Coinstamp"
      description="Use decentralized currencies to buy and print your postage."
    >
      <section className="text-center">
        <Link href={"/create"}>
          <Button>Create a Stamp</Button>
        </Link>
      </section>
    </Layout>
  );
};

export default Home;
