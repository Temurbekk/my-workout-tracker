import React, { useState } from "react";
import { withFirebase } from "../Components/Firebase";
import { Link, withRouter } from "react-router-dom";

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Grid,
  LockOutlinedIcon,
  Typography,
  Container,
} from "../MaterialUI";

import useStyles from "../themes/theme.SignUp";

function SignUp(props) {
  const classes = useStyles();

  const initialUser = {
    id: null,
    name: "",
    email: "",
    password: "",
    error: null,
    auth: null,
  };

  const [user, setUser] = useState(initialUser);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    props.firebase.auth
      .createUserWithEmailAndPassword(user.email, user.password)
      // Later add user also to database
      .then((authUser) => {
        setUser(initialUser);
        props.history.push("/dashboard");
      })
      .catch((error) => {
        setUser({ ...user, error: error.message });
      });
  };

  const isValid = user.name === "" || user.email === "" || user.password === "";

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={(e) => e.preventDefault()}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoFocus
            value={user.name}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
          />
          <Typography className={classes.error}>
            {user.error ? user.error : ""}
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
            disabled={isValid}
          >
            Sign up
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/signIn">{"Already have an account? Sign In"}</Link>
            </Grid>
          </Grid>
          <Box mt={5}>{/* /<Copyright /> */}</Box>
        </form>
      </div>
    </Container>
  );
}

export default withRouter(withFirebase(SignUp));
