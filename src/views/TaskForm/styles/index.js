import { makeStyles } from "@mui/styles";

const dynamicStyle = makeStyles((theme) => ({
  dialogTitle: {
    backgroundColor: "#1976d2",
    color: "white",
    textTransform: "uppercase",
    justifyContent: "space-between",
    display: "flex",
    height: 60,
  },
}));

export default dynamicStyle;
