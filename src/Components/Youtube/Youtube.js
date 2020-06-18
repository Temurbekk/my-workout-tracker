import React from 'react';

import { Grid } from '@material-ui/core';

import SearchBar from '../SearchBar'
import VideoDetails from '../VideoDetails'
// import VideoList from './Components/VideoList'

import youtube from '../../Api/youtube';

function Youtube() {
  return (
    <div>
      <Grid justify="center" container spacing={16}>
        <Grid item xs={12}>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <SearchBar />
            </Grid>
            <Grid item xs={8}>
              <VideoDetails />
            </Grid>
            <Grid item xs={4}>
              {/* Video List */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Youtube

