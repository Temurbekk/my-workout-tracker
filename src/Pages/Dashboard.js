import React, { useState } from "react";

import { AuthUserContext, withAuthentication } from "../Components/Session";
import { withRouter, Link } from "react-router-dom";

import {
  clsx,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Container,
  MenuIcon,
} from "../MaterialUI";

import useStyles from "../config/theme.dashboard";

import Sidebar from "../Components/Sidebar";
import Calendar from "../Components/Calendar";

function Dashboard(props) {

  const classes = useStyles();

  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const signOut = () => {
    props.firebase.auth.signOut();
    props.history.push("/");
  };

  return (
    <AuthUserContext.Consumer>
      {(authUser) =>
        authUser ? (
          <div className={classes.root}>
            <CssBaseline />
            <AppBar
              position="absolute"
              className={clsx(classes.appBar, open && classes.appBarShift)}
            >
              <Toolbar className={classes.toolbar}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  className={clsx(
                    classes.menuButton,
                    open && classes.menuButtonHidden
                  )}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  component="h1"
                  variant="h6"
                  color="inherit"
                  noWrap
                  className={classes.title}
                >
                  Dashboard
                </Typography>
                <IconButton color="inherit">
                  <Badge badgeContent={0} color="secondary">
                    <Typography component="p" style={{ paddingRight: "15px" }}>
                      Username
                    </Typography>
                  </Badge>
                </IconButton>
              </Toolbar>
            </AppBar>

            <Sidebar
              signOut={signOut}
              open={open}
              handleDrawerClose={handleDrawerClose}
            />

            <main
              className={
                (classes.content,
                !open ? classes.contentClosed : classes.appBarShift)
              }
            >
              <div className={classes.appBarSpacer} />
              <Container maxWidth="xl" className={classes.container}>
                <Calendar firebase={props.firebase} authUser={authUser} />
              </Container>
            </main>
          </div>
        ) : (
          <div>
          <p>Not authorized. Please sign in!</p>
          <Link to="/signIn" variant="body2">
                {"Sign In"}
          </Link>
          </div>
        )
      }
    </AuthUserContext.Consumer>
  );
}

export default withRouter(withAuthentication(Dashboard));
