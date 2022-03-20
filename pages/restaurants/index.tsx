import Head from "next/head";
import { NextPage } from "next/types";
import React from "react";
import { Layout } from "ui/Layout";

const RestuantsPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>restaurant page</Layout>
    </div>
  );
};

export default RestuantsPage;
