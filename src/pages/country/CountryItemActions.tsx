import React from "react";
import { ArrowBack } from "@mui/icons-material";
import { Button } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  actions: {
    flex: 1,
    marginBottom: 5,
  },
});

const CountryItemActions: React.FC = () => {
  const classes = useStyles();
  let history = useNavigate();

  async function handleRedirect(e: any) {
    e.preventDefault();
    history("/home");
  }

  return (
    <div className={classes.actions}>
      <Button variant="outlined" onClick={handleRedirect}>
        <ArrowBack /> &nbsp;Back
      </Button>
    </div>
  );
};

export default CountryItemActions;
