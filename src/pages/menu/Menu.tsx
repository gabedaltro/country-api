import * as React from "react";
import { Button, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { DarkMode } from "@mui/icons-material";
import { useAppThemeContext } from "../../shared/contexts";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  header: {
    height: 70,
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    borderBottom: "2px solid #c1c1c1",
    alignItems: "center",
    backgroundColor: "white",
    textAlign: "end",
  },
  container: {
    marginTop: 50,
    marginLeft: 50,
    marginRight: 50,
  },
  redirect: {
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
          <Typography textAlign="start" paddingLeft="50px" fontWeight="bold">
            Where in the world?
          </Typography>
        </div>
        <div onClick={toggleTheme}>
          <Button color="inherit">
            <DarkMode />
            <Typography marginLeft={1} paddingRight="50px" textTransform="none">
              Dark Mode
            </Typography>
          </Button>
        </div>
      </div>
      <div className={classes.container}>{children}</div>
    </>
  );
};

export default Menu;
