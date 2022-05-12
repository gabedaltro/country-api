import * as React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  header: {
    height: 70,
    display: "flex",
    justifyContent: "space-between",
    flexFlow: "row nowrap",
    borderBottom: "2px solid #c1c1c1",
    alignItems: "center",
    backgroundColor: "white",
    textAlign: "end",
    paddingRight: 50,
    paddingLeft: 50,
  },
  container: {
    marginTop: 50,
    marginLeft: 50,
    marginRight: 50,
  },
  redirect: {
    cursor: "pointer",
  },
  darkMode: {
    display: "flex",
    flexWrap: "nowrap",
    cursor: "pointer",
  },
}));

const Menu: React.FC = ({ children }) => {
  let history = useNavigate();

  async function handleRedirect(e: any) {
    e.preventDefault();
    history("/home");
  }

  const classes = useStyles();
  return (
    <>
      <div className={classes.header}>
        <div className={classes.redirect} onClick={handleRedirect}>
          <Typography textAlign="start" fontWeight="bold">
            Where in the world?
          </Typography>
        </div>
      </div>
      <div className={classes.container}>{children}</div>
    </>
  );
};

export default Menu;
