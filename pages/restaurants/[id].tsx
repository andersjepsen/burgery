import { useTheme } from "@emotion/react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  Skeleton,
  Tab,
  Tabs,
  Tooltip,
  Typography,
} from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { NextPage } from "next/types";
import React, { useRef } from "react";
import { Layout } from "ui/Layout";
import { Rating } from "ui/components/Rating";
import FileUploadIcon from "@mui/icons-material/FileUpload";

const MENUS = [...new Array(10)].map((_, index) => ({
  id: index,
  name: `Menu ${index + 1}`,
  price: 99,
}));

const OPENING_HOURS = [
  {
    day: "Monday",
  },
  {
    day: "Tuesday",
    open: "16:00",
    close: "22:00",
  },
  {
    day: "Wednesday",
    open: "16:00",
    close: "22:00",
  },
  {
    day: "Thursday",
    open: "16:00",
    close: "22:00",
  },
  {
    day: "Friday",
    open: "16:00",
    close: "02:00",
  },
  {
    day: "Saturday",
    open: "16:00",
    close: "02:00",
  },
  {
    day: "Sunday",
    open: "16:00",
    close: "22:00",
  },
];

const IMAGES = [
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
  },
];

const RestaurantPage: NextPage = () => {
  const [page, setPage] = React.useState("about");

  const [rating, setRating] = React.useState<{
    taste: number | null;
    texture: number | null;
    visual: number | null;
  }>({
    taste: 4,
    texture: 5,
    visual: 3,
  });

  const upload = React.useRef<HTMLInputElement>(null);

  const handleUpload = () => {
    upload.current?.click();
  };

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setPage(newValue);
  };

  return (
    <div>
      <Head>
        <title>Restaurant Name | Burgery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Grid container>
          <Grid item xs>
            <Typography variant="h3">Restaurant Name</Typography>
            <Typography variant="h6">Some address 24</Typography>
          </Grid>
          <Grid item>
            <Rating value={{ taste: 5, texture: 3, visual: 4 }} />
          </Grid>
        </Grid>

        <Tabs
          value={page}
          onChange={handleChange}
          variant="fullWidth"
          defaultValue="about"
          sx={{ mb: 2 }}
        >
          <Tab value="about" label="About" />
          <Tab value="menu" label="Menu" />
        </Tabs>

        {page === "about" && (
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card>
                <CardContent>
                  <Typography variant="h5">About</Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    sit amet ante vitae eros vulputate accumsan. Morbi blandit,
                    elit et feugiat mollis, justo neque laoreet est, quis
                    elementum elit turpis vel mi. Maecenas vulputate quam tempus
                    nulla sagittis, eu facilisis augue mollis. Aliquam vel
                    fringilla ligula. Etiam ornare quis nisi et aliquet. Quisque
                    arcu erat, molestie consectetur arcu nec, auctor laoreet
                    orci. Integer mattis pulvinar neque, eget vehicula metus
                    venenatis a. Sed commodo quis erat eget bibendum. Vestibulum
                    tristique rutrum mi, ut fringilla lectus volutpat ac. Duis
                    sed dui auctor, volutpat diam ac, viverra massa. Fusce porta
                    lorem in cursus pulvinar.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Opening hours</Typography>
                  {OPENING_HOURS.map((openingHour) => (
                    <Grid container spacing={2} key={openingHour.day}>
                      <Grid item xs>
                        <Typography>{openingHour.day}</Typography>
                      </Grid>
                      <Grid item>
                        <Typography>
                          {openingHour.open && openingHour.close
                            ? `${openingHour.open} - ${openingHour.close}`
                            : "Closed"}
                        </Typography>
                      </Grid>
                    </Grid>
                  ))}
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={8}>
              <Card>
                <Grid container item justifyContent="flex-end">
                  <input
                    ref={upload}
                    type="file"
                    hidden
                    accept="image/png, image/jpeg"
                  />
                  <Tooltip title="Upload">
                    <IconButton color="primary" onClick={handleUpload}>
                      <FileUploadIcon />
                    </IconButton>
                  </Tooltip>
                </Grid>
                <ImageList cols={3}>
                  {IMAGES.map((item) => (
                    <ImageListItem key={item.img}>
                      <img
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt=""
                        loading="lazy"
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5">My Rating</Typography>
                  <Rating value={rating} onChange={setRating} />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}

        {page === "menu" && (
          <Card>
            <CardContent>
              <Grid container spacing={2} direction="column">
                {MENUS.map((menu) => (
                  <Grid item xs key={menu.id}>
                    <Grid
                      container
                      spacing={2}
                      direction="row"
                      alignItems="center"
                    >
                      <Grid item>
                        <Skeleton
                          variant="rectangular"
                          width={60}
                          height={60}
                        />
                      </Grid>
                      <Grid item xs>
                        <Typography fontWeight={800}>{menu.name}</Typography>

                        <Typography>Burger, fries and a coke</Typography>
                      </Grid>
                      <Grid item>
                        <Typography>{`${menu.price} kr.`}</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        )}
      </Layout>
    </div>
  );
};

export default RestaurantPage;
