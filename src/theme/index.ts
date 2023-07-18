import { createTheme, darken } from "@mui/material/styles";
import { roboto } from "./font";
import { palette } from "./palette";
import { buttonSharedStyle, defaultInputBorderRadius } from "./shared";

const theme = createTheme({
  palette,
  typography: {
    fontFamily: roboto.style.fontFamily,
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          ...defaultInputBorderRadius,
        },
      },
      variants: [
        {
          props: { variant: "text" },
          style: {
            borderRadius: 5,
            paddingInline: 10,
          },
        },
        {
          props: { variant: "contained" },
          style: {
            ...buttonSharedStyle,
            backgroundColor: palette.primary.main,
            ":hover": {
              backgroundColor: darken(palette.primary.main, 0.1),
            },
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            ...buttonSharedStyle,
            backgroundColor: palette.primary.main,
            ":hover": {
              backgroundColor: darken(palette.primary.main, 0.1),
            },
          },
        },
      ],
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "&.squared-text-field": {
            "& fieldset": {
              borderRadius: 5,
            },
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          ...defaultInputBorderRadius,
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      },
    },
  },
});

export default theme;
