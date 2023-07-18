import theme from "@/theme";
import { AppBar, Button, Stack, Toolbar } from "@mui/material";
import Image from "next/image";
import React, { PropsWithChildren } from "react";

const DefaultLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Button color="inherit" aria-label="logo">
            <Image width={168} height={46} src={"/images/logo-full.png"} alt="viglo-logo" />
          </Button>
          <Stack direction="row" spacing={2}>
            <Button variant="text" sx={{ color: theme.palette.text.primary }}>
              Login
            </Button>
            <Button variant="text" sx={{ color: theme.palette.text.primary }}>
              Sign Up
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      {children}
    </>
  );
};

export default DefaultLayout;
