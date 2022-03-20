import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Rating,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { NextPage } from "next/types";
import React from "react";
import { Layout } from "ui/Layout";

const RestuantPage: NextPage = () => {
  const router = useRouter();

  const [page, setPage] = React.useState("about");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setPage(newValue);
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Typography variant="h3">Restaurant Name</Typography>
        <Typography variant="h6">Some address 24</Typography>

        <Tabs
          value={page}
          onChange={handleChange}
          variant="fullWidth"
          defaultValue="about"
        >
          <Tab value="about" label="About" />
          <Tab value="menu" label="Menu" />
        </Tabs>

        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Card>
              <CardContent>Some discription {router.query.id}</CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Typography variant="h5">Opening hours</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={8}>
            <Card>
              <CardContent>Photos</CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Typography variant="h5">My Rating</Typography>
                <Grid container spacing={1} direction="column">
                  <Grid item>
                    <Rating value={4} />
                  </Grid>
                  <Grid item>
                    <Rating value={5} />
                  </Grid>
                  <Grid item>
                    <Rating value={3} />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Layout>
    </div>
  );
};

export default RestuantPage;
