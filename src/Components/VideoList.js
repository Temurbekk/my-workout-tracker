import React from 'react';

import {Grid, Paper, Typography} from '@material-ui/core';

import VideoItem from './VideoItem';

const VideoList = ({videos}) => {
 console.log(videos);
 const listOfVideos = videos.map((video) => <VideoItem/> )
    
 return (listOfVideos);

}
export default VideoList;