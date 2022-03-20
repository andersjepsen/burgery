import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box, Button, Container, Grid } from "@mui/material";
import { useRouter } from "next/router";

const pages = [
  { title: "My Restaurants", link: "/restaurants" },
  { title: "Discover", link: "/restaurants/discover" },
];

interface LayoutProps {
  fullscreen?: boolean;
  children: React.ReactNode;
}
export function Layout({ children, fullscreen = false }: LayoutProps) {
  const router = useRouter();

  const maxWidth = React.useMemo(
    () => (fullscreen === true ? false : undefined),
    [fullscreen]
  );

  const handleClick = (link: string) => {
    router.push(link);
  };

  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ mr: 2 }}>
            BURGERY
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={() => handleClick(page.link)}
                variant="text"
                sx={{ my: 2, color: "white" }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          <Button
            variant="text"
            onClick={() => handleClick("/")}
            sx={{ my: 2, color: "white" }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container maxWidth={maxWidth} disableGutters={fullscreen}>
        {children}
      </Container>
    </div>
  );
}
