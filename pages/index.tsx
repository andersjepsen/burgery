import { Button, Container, Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Layout } from "ui/Layout";

const Home: NextPage = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/restaurants");
  };
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Grid
          container
          spacing={2}
          direction="column"
          alignContent="center"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h2">Welcome to Burgery</Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={handleLogin}>
              Login
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
