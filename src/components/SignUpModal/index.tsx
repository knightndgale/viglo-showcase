import React from "react";

import ModalComponent from "@/components/common/ModalComponent";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import theme from "@/theme";
import LinkTypography from "../common/LinkTypography";

interface ModalComponentProps {
  open: boolean;
  handleClose: () => void;
}

const SignUpModal: React.FC<ModalComponentProps> = (props) => {
  return (
    <ModalComponent {...props} title="Let's setup your account">
      <Box marginY={theme.spacing(2)}>
        <Stack spacing={3}>
          <TextField id="rounded" variant="outlined" fullWidth label="Full Name" />
          <TextField id="rounded" variant="outlined" fullWidth label="Email" />
        </Stack>
        <Button fullWidth sx={{ marginTop: theme.spacing(5) }} variant="contained">
          Remind me next week
        </Button>
        <Stack marginTop={theme.spacing(2)} spacing={1} direction={"row"} justifyContent={"center"}>
          <Typography variant="body1">Already have an account?</Typography>
          <LinkTypography>Sign in here.</LinkTypography>
        </Stack>
      </Box>
    </ModalComponent>
  );
};

export default SignUpModal;
