import type { NextPage } from "next";
import Head from "next/head";
import Heading from "@/components/Heading";

const Create: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create - CoinStamp</title>
      </Head>
      <main className="container-page">
        <Heading title="Create" subtitle="Create a new stamp" />
      </main>
    </>
  );
};

export default Create;
