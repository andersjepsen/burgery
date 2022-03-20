import { Card, CardContent, Paper, Skeleton, Typography } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { NextPage } from "next/types";
import React from "react";
import { Layout } from "ui/Layout";

const DiscoverPage: NextPage = () => {
  const router = useRouter();
  const restaurants = React.useMemo(() => {
    const emptyList = [...new Array(10)];

    return emptyList.map((_, index) => ({
      id: index,
      address: `Address ${index + 1}`,
    }));
  }, []);

  return (
    <div>
      <Head>
        <title>Discover | Burgery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout fullscreen>
        maps here
        <Paper
          sx={{
            width: "33%",
            px: 1,

            overflowY: "scroll",
            position: "absolute",
            right: 0,
            bottom: 0,
            top: 70,
          }}
        >
          {restaurants.map((restaurant) => (
            <Card sx={{ display: "flex", my: 2 }} key={restaurant.id}>
              <Link href={`/restaurants/${restaurant.id}`} passHref>
                <CardContent sx={{ flexGrow: 1, cursor: "pointer" }}>
                  <Typography variant="h5">Burger Palace</Typography>
                  <Typography color="neutral">{restaurant.address}</Typography>
                </CardContent>
              </Link>

              <Skeleton variant="rectangular" width={120} height={120} />
            </Card>
          ))}
        </Paper>
      </Layout>
    </div>
  );
};

export default DiscoverPage;
