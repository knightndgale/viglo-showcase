import { Typography, TypographyProps } from "@mui/material";
import { styled } from "@mui/system";
import { darken } from "@mui/material/styles";

const LinkTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 700,
  cursor: "pointer",
  "&:hover": {
    color: darken(theme.palette.primary.main, 0.2),
  },
}));

export default LinkTypography;
