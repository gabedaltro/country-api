import { makeStyles } from "@material-ui/styles";
import { Typography } from "@mui/material";
import React from "react";

const useStyles = makeStyles({
  container: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flex: 1,
    marginTop: 10,
  },
});

type NoDataProps = {
  message: string;
};

const NoData: React.FC<NoDataProps> = ({ message }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography>{message}</Typography>
    </div>
  );
};

export default NoData;
