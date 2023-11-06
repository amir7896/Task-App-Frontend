import { makeStyles } from "@mui/styles";

const dynamicStyle = makeStyles((theme) => ({
  drawer: {
    width: 420,
    maxWidth: "100%",
    "& .MuiCardHeader-root": {
      fontSize: "24px",
      fontWeight: "500px",
      color: "#000000",
    },
    "& .MuiSvgIcon-root": {
      fontSize: "25px",
    },
  },
  buttons: {
    width: "100%",
  },
  buttonsGrid: {
    padding: "10px 10px 10px 10px",
  },
  formGrid: {
    padding: "3px 10px 20px 10px",
  },
  filterTitle: {
    padding: "20px 0px 20px 10px",
    fontSize: "20px",
    color: "#000000",
    marginBottom: "20px",
    fontWeight: "500px",
  },
  textFieldGrid: {
    padding: "5px 7px 5px 7px",
  },
  filterButton: {
    width: "100%",
  },
}));

export default dynamicStyle;
