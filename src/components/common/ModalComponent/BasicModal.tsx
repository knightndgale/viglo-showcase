import React from "react";
import { Dialog, DialogTitle, Typography, Grid, Button, DialogContent } from "@mui/material";
import { palette } from "@/theme/palette";
import { Close } from "@mui/icons-material";

interface BasicModalComponentProps {
  title: string;
  open: boolean;
  handleClose: () => void;
  children?: React.ReactElement;
  isContentNoPadding?: boolean;
}

const BasicModal: React.FC<BasicModalComponentProps> = ({ title, open, handleClose, children, isContentNoPadding = false }) => {
  const contentPadding = isContentNoPadding && { padding: 0 };
  return (
    <Dialog
      open={open}
      PaperProps={{
        sx: {
          borderRadius: "24px",
          width: {
            xs: "95%",
            sm: "65%",
            md: "40%",
            lg: "40%",
          },
        },
      }}
    >
      <DialogTitle>
        <Grid container alignItems="start" spacing={2} sx={{ margin: "-8px" }}>
          <Grid item xs={10} sx={{ marginLeft: "-8px" }}>
            <Typography variant={"body1"}>{title}</Typography>
          </Grid>
          <Grid display={"flex"} justifyContent={"end"} item xs={2}>
            <Button sx={{ padding: 0 }} onClick={handleClose} startIcon={<Close sx={{ color: palette.text.primary }} />}>
              <Typography variant="body1" color={palette.text.primary}>
                Close
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent sx={{ ...contentPadding }}>{children}</DialogContent>
    </Dialog>
  );
};

export default BasicModal;
