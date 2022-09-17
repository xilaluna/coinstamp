import Heading from "@/components/Heading";
import type { NextPage } from "next";
import Head from "next/head";

const Order: NextPage = () => {
  return (
    <>
      <Head>
        <title>Order - CoinStamp</title>
      </Head>
      <main className="container-secondary">
        <Heading title="Order" subtitle="Your Order" />
      </main>
    </>
  );
};

export default Order;
