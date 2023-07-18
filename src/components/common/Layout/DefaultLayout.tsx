import AuthorizationModal from "@/components/AuthorizationModal";
import SignInModal from "@/components/SignInModal";
import SignUpModal from "@/components/SignUpModal";
import BackgroundProvider from "@/provider/background.provider";
import theme from "@/theme";
import useDisclosure from "@/useDisclosure";
import { AppBar, Button, Stack, Toolbar } from "@mui/material";
import Image from "next/image";
import React, { PropsWithChildren } from "react";

const DefaultLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const signUpModal = useDisclosure();
  const signInModal = useDisclosure();
  const authorizationModal = useDisclosure();

  const onSignInModalLinkEvent = () => {
    signInModal.onClose();
    signUpModal.onOpen();
  };

  const onSignUpModalLinkEvent = () => {
    signUpModal.onClose();
    signInModal.onOpen();
  };

  const resendCodeHandler = () => {};
  const onSubmitEvent = () => {};

  return (
    <BackgroundProvider>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Button color="inherit" aria-label="logo">
            <Image width={168} height={46} src={"/images/logo-full.png"} alt="viglo-logo" />
          </Button>
          <Stack direction="row" spacing={2}>
            <Button onClick={() => signInModal.onOpen()} variant="text" sx={{ color: theme.palette.text.primary }}>
              Login
            </Button>
            <Button onClick={() => signUpModal.onOpen()} variant="text" sx={{ color: theme.palette.text.primary }}>
              Sign Up
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      {children}
      <AuthorizationModal
        onSubmitEvent={onSubmitEvent}
        linkEvent={resendCodeHandler}
        open={authorizationModal.isOpen}
        handleClose={() => authorizationModal.onToggle()}
      />
      <SignInModal linkEvent={onSignInModalLinkEvent} open={signInModal.isOpen} handleClose={() => signInModal.onToggle()} />
      <SignUpModal linkEvent={onSignUpModalLinkEvent} open={signUpModal.isOpen} handleClose={() => signUpModal.onToggle()} />
    </BackgroundProvider>
  );
};

export default DefaultLayout;
