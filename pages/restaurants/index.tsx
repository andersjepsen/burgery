import { Card, CardContent, Grid, Skeleton, Typography } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import { NextPage } from "next/types";
import React from "react";
import { Layout } from "ui/Layout";

const FEED = [...new Array(10)].map((_, index) => ({
  id: index,
  restaurant: {
    id: index + 10,
  },
  text: (index + 1) % 3 === 0,
  image: (index + 1) % 4 === 0,
}));

const RestuantsPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>My Restaurants | Burgery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout maxWidth="sm">
        {FEED.map((feedItem) => (
          <Link
            key={feedItem.id}
            href={`/restaurants/${feedItem.restaurant.id}`}
            passHref
          >
            <Card sx={{ mb: 2, cursor: "pointer" }}>
              <CardContent>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <Skeleton variant="circular" width={48} height={48} />
                  </Grid>
                  <Grid item xs>
                    <Typography>
                      <Skeleton />
                    </Typography>
                  </Grid>
                  {!feedItem.text && (
                    <Grid item xs={12}>
                      <Typography>
                        <Skeleton />
                      </Typography>
                    </Grid>
                  )}
                  <Grid item xs={12}>
                    {feedItem.text && (
                      <Typography>
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                      </Typography>
                    )}
                    {feedItem.image && (
                      <Grid container justifyContent="center" spacing={2}>
                        <Grid item>
                          <Skeleton
                            variant="rectangular"
                            width={128}
                            height={128}
                          />
                        </Grid>
                        <Grid item>
                          <Skeleton
                            variant="rectangular"
                            width={128}
                            height={128}
                          />
                        </Grid>
                        <Grid item>
                          <Skeleton
                            variant="rectangular"
                            width={128}
                            height={128}
                          />
                        </Grid>
                      </Grid>
                    )}
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Link>
        ))}
      </Layout>
    </div>
  );
};

export default RestuantsPage;
