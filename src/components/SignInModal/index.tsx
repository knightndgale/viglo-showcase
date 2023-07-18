import React from "react";

import ModalComponent from "@/components/common/ModalComponent";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import theme from "@/theme";
import LinkTypography from "../common/LinkTypography";

interface ModalComponentProps {
  open: boolean;
  handleClose: () => void;
  linkEvent?: () => void;
}

const SignInModal: React.FC<ModalComponentProps> = ({ linkEvent, ...rest }) => {
  return (
    <ModalComponent {...rest} title="Welcome Back!">
      <Box marginY={theme.spacing(2)}>
        <Stack spacing={3}>
          <TextField variant="outlined" fullWidth label="Email" />
        </Stack>
        <Button fullWidth sx={{ marginTop: theme.spacing(5) }} variant="contained">
          Remind me next week
        </Button>
        <Stack marginTop={theme.spacing(2)} spacing={1} direction={"row"} justifyContent={"center"}>
          <Typography variant="body1">{"Don't you have an account?"}</Typography>
          <LinkTypography onClick={linkEvent}>Sign up here.</LinkTypography>
        </Stack>
      </Box>
    </ModalComponent>
  );
};

export default SignInModal;
