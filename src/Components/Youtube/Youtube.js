import React, { Component } from 'react';

import { Grid } from '@material-ui/core';

import SearchBar from '../SearchBar'
import VideoDetails from '../VideoDetails'
// import VideoList from './Components/VideoList'

import youtube from '../../Api/youtube';

class Youtube extends Component {
  state = {
    video: [],
    selectedVideo: null,
  }
  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        part: "snippet",
        maxResults: 5,
        key: process.env.REACT_APP_API_KEY,
        q: searchTerm,
      }
    });

    console.log(response)

  this.setState({ videos: response.data.items, selectedVideo: response.data.items[0]});
  }
  render() {
    const {selectedVideo}=this.state;
    
  return (
    
    <div>
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit = {this.handleSubmit}/>
            </Grid>
            <Grid item xs={8}>
              <VideoDetails video={selectedVideo}/>
            </Grid>
            <Grid item xs={4}>
              {/* Video List */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
};
}

export default Youtube
