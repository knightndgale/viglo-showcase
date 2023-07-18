import { Box } from "@mui/material";
import React, { PropsWithChildren } from "react";

const BackgroundProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      height="100vh"
      width="100vw"
      sx={{
        backgroundImage: "url('images/circles-bg.png')",
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </Box>
  );
};

export default BackgroundProvider;
