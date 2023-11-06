import { makeStyles } from "@mui/styles";

const dynamicStyle = makeStyles((them) => ({
  root: {
    "& .MuiButtonBase-root": {
      backgroundColor: "transparent",
      color: "inherit",
    },
  },
  links: {
    textDecoration: "none",
    margin: "5px",
    color: "white",
    _hover: {
      boxShadow: "none",
    },
  },
  Username: {
    marginRight: "15px",
    textAlign: "center",
    "& .MuiTypography-root ": {
      fontWeight: "bold",
      fontSize: "17px",
    },
  },
}));

export default dynamicStyle;
