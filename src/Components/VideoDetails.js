import React from 'react'

import {Paper,Typography} from '@material-ui/core';

const VideoDetails=({video})=> {
  if(!video) return <div>Search for your work outs...</div>

  const videoSrc= `https://www.youtube.com/embed/${video.id.videoId}`;

  console.log(video);

  return (
    <>
      <h1>This is a video detail</h1>
      <Paper elavation={6} styling={{height:'70%'}}>
        <iframe frameBorder='0' height='100' width='100%' title = "Video Player" src={videoSrc}/>
      </Paper>
      <Paper elavation={6} styling={{padding: '15px'}}>
        <Typography variant='h4'>
          {video.snippet.title} - {video.snippet.channelTitle}
        </Typography>
        <Typography variant='subtitle1'>
        {video.snippet.channelTitle}
        </Typography>
        <Typography variant='subtitle1'>
          {video.snippet.title} - {video.snippet.description}
        </Typography>
        
      </Paper>
    </>
  )
}

export default VideoDetails
