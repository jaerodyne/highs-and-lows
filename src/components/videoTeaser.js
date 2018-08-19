import React, { Component } from 'react';

class VideoTeaser extends Component {
  constructor (props) {
    super(props);

    this.state = {
      videoMp4: 'video/teaser.mp4',
      videoWebm: 'video/teaser.webm'
    }
  }

  render () {
    return (
      <div className="video-contain">
        <video id="background-video" loop autoPlay muted preload="auto" >
          <source src={this.state.videoWebm} type="video/webm" />
          <source src={this.state.videoMp4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    )
  }
};

// <div className="video-contain" onClick={() => this.parallax.scrollTo(1)}>
export default VideoTeaser;
