import React from "react";

import ModalComponent from "@/components/common/ModalComponent";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import theme from "@/theme";
import LinkTypography from "../common/LinkTypography";

interface ModalComponentProps {
  open: boolean;
  handleClose: () => void;
  linkEvent?: () => void;
  email?: string;
  onSubmitEvent: () => void;
}

const AuthorizationModal: React.FC<ModalComponentProps> = ({ linkEvent, email, onSubmitEvent, ...rest }) => {
  return (
    <ModalComponent {...rest} title="Authorization">
      <Box marginY={theme.spacing(2)}>
        <Stack direction={"column"}>
          <Typography variant="body1">Please enter the 6-digit authentication code sent to</Typography>
          <Typography variant="body1">{email || "example@mail.com"}</Typography>
        </Stack>
        <Stack direction={"row"} spacing={2} marginTop={theme.spacing(3)}>
          <TextField className="squared-text-field" />
          <TextField className="squared-text-field" />
          <TextField className="squared-text-field" />
          <TextField className="squared-text-field" />
          <TextField className="squared-text-field" />
          <TextField className="squared-text-field" />
        </Stack>

        <Stack marginTop={theme.spacing(2)} spacing={1} direction={"row"} justifyContent={"end"}>
          <LinkTypography onClick={linkEvent}>Resend Code</LinkTypography>
        </Stack>

        <Box marginTop={theme.spacing(4)}>
          <Button onSubmit={onSubmitEvent} fullWidth variant="contained">
            Submit
          </Button>
        </Box>
      </Box>
    </ModalComponent>
  );
};

export default AuthorizationModal;
