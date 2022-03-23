import {
  Card,
  CardContent,
  Grid,
  Paper,
  Skeleton,
  Typography,
} from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next/types";
import React from "react";
import { Rating } from "ui/components/Rating";
import { Layout } from "ui/Layout";

const RESTAURANTS = [...new Array(10)].map((_, index) => ({
  id: index,
  name: "Burger Palace",
  address: `Address ${index + 1}`,
  rating: {
    taste: Math.floor(Math.random() * 5) + 1,
    texture: Math.floor(Math.random() * 5) + 1,
    visual: Math.floor(Math.random() * 5) + 1,
  },
}));

export const getServerSideProps: GetServerSideProps<{
  restaurants: typeof RESTAURANTS;
}> = async () => {
  return { props: { restaurants: RESTAURANTS } };
};

const DiscoverPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ restaurants }) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Discover | Burgery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout maxWidth={false}>
        <Image src="/maps.png" alt="" layout="fill" />
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
                  <Grid container>
                    <Grid item xs>
                      <Typography variant="h5">{restaurant.name}</Typography>
                      <Typography color="neutral">
                        {restaurant.address}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Rating value={restaurant.rating} />
                    </Grid>
                  </Grid>
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
