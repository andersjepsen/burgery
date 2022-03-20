import Head from "next/head";
import { NextPage } from "next/types";
import React from "react";
import { Layout } from "ui/Layout";

const DiscoverPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout fullscreen>maps here</Layout>
    </div>
  );
};

export default DiscoverPage;
