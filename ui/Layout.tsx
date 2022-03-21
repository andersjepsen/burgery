import {
  Avatar,
  Box,
  Button,
  Container,
  ContainerTypeMap,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import React from "react";

const pages = [
  { title: "My Restaurants", link: "/restaurants" },
  { title: "Discover", link: "/restaurants/discover" },
];

interface LayoutProps {
  maxWidth?: ContainerTypeMap["props"]["maxWidth"];
  children: React.ReactNode;
}
export function Layout({ children, maxWidth = "lg" }: LayoutProps) {
  const router = useRouter();

  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const fullscreen = React.useMemo(() => maxWidth === undefined, [maxWidth]);

  const open = Boolean(anchorEl);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

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

          <Tooltip title="Bob Belcher">
            <IconButton onClick={handleOpenMenu}>
              <Avatar />
            </IconButton>
          </Tooltip>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleCloseMenu}
          >
            <MenuItem onClick={() => handleClick("/")}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container
        maxWidth={maxWidth}
        disableGutters={fullscreen}
        sx={!fullscreen ? { mt: 2 } : undefined}
      >
        {children}
      </Container>
    </div>
  );
}
