import React from "react";
import { AppBar, Toolbar, Typography, Button } from "../../MaterialUI";
import { Link } from "react-router-dom";

import useStyles from "../../themes/theme.navbar";

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            FitPal
          </Typography>
          <Button color="inherit">
            <Link to="signIn" className={classes.link}>
              Sign In
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/signUp" className={classes.link}>
              Sign Up
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
