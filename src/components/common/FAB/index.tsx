import React, { useEffect, useState, ReactElement, MouseEventHandler } from "react";
import Fab from "@mui/material/Fab";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Box } from "@mui/system";
import theme from "@/theme";

interface FABProps {
  icon?: ReactElement;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isAlwaysVisible?: boolean;
  backgroundColor?: string;
}

const FAB: React.FC<FABProps> = ({
  backgroundColor = theme.palette.primary.dark,
  icon = <HelpOutlineIcon fontSize="large" />,
  onClick,
  isAlwaysVisible = true,
}) => {
  const [visible, setVisible] = useState(isAlwaysVisible);

  const defaultOnClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    visible && (
      <Box sx={{ position: "fixed", bottom: 16, right: 16 }}>
        <Fab
          style={{ borderRadius: "5px", backgroundColor, color: "inherit" }}
          onClick={onClick || defaultOnClick}
          aria-label="FAB Button"
          color="primary"
          size="large"
        >
          {icon}
        </Fab>
      </Box>
    )
  );
};

export default FAB;
