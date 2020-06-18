import React from "react";

import { Paper, Typography } from "@material-ui/core";

export default ({ video }) => {
  if (!video) return <div>Search for your Workout!</div>;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <React.Fragment>
      <Paper elevation={6} style={{ height: "50%" }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "10px" }}>
        <Typography variant="h4">
          {video.snippet.title}
        </Typography><br></br>
        <Typography variant="subtitle1">
          Channel: {video.snippet.channelTitle}
        </Typography><br></br>
        <Typography variant="subtitle2">Description: {video.snippet.description}</Typography>
      </Paper>
    </React.Fragment>
  );
}