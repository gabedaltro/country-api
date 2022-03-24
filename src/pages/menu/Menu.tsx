import * as React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { DarkMode } from "@mui/icons-material";
import { useAppThemeContext } from "../../shared/contexts";
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
  chart: {
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
  const { toggleTheme } = useAppThemeContext();

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
        <div className={classes.chart} onClick={() => history("/charts")}>
          <Typography variant="button">Charts</Typography>
        </div>
        <div className={classes.darkMode} onClick={toggleTheme}>
          <DarkMode />
          <Typography marginLeft={1}>Dark Mode</Typography>
        </div>
      </div>
      <div className={classes.container}>{children}</div>
    </>
  );
};

export default Menu;
