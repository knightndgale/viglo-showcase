import React from "react";
import { Dialog, DialogTitle, Typography, Grid, Button, DialogContent } from "@mui/material";
import theme from "@/theme";
import { palette } from "@/theme/palette";

interface ModalComponentProps {
  title: string;
  open: boolean;
  handleClose: () => void;
  children?: React.ReactElement;
}

const ModalComponent: React.FC<ModalComponentProps> = ({ title, open, handleClose, children }) => {
  return (
    <Dialog
      open={open}
      PaperProps={{
        sx: {
          borderRadius: "24px",
        },
      }}
    >
      <DialogTitle>
        <Grid container alignItems="start" spacing={2} sx={{ margin: "-8px" }}>
          <Grid item xs={8}>
            <Typography
              variant={"h3"}
              sx={{
                fontWeight: "bold",
                fontSize: {
                  xs: "1.8rem",
                  sm: "2rem",
                  md: "2.5rem",
                  lg: "3rem",
                },
              }}
            >
              {title}
            </Typography>
          </Grid>
          <Grid display={"flex"} justifyContent={"end"} item xs={4} marginTop={theme.spacing(1)}>
            <Button onClick={handleClose}>
              <Typography variant="h6" color={palette.text.muted} fontWeight={theme.typography.fontWeightMedium}>
                Close
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default ModalComponent;
