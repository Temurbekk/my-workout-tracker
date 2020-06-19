import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Navbar from "../Components/Navbar";
import tileData from "../TileData/tileData";
import HomeCard from "../Components/HomeCard";
import useStyles from "../themes/theme.home";

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Navbar />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h3"
              variant="h3"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              A better workout app
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              -FitPal is an application that allows users to set their workouts
              for specific days. <br /> -Create your dream workout plan to get
              your dream body.
            </Typography>
          </Container>
        </div>
        {tileData.map((tile, i) => (
          <div key={i}>
            <HomeCard
              img={tile.img}
              title={tile.title}
              description={tile.description}
            />
          </div>
        ))}
      </main>
    </>
  );
}
