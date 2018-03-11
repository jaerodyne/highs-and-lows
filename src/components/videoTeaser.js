import React, { Component } from 'react';

class VideoTeaser extends Component {
  constructor (props) {
    super(props);

    this.state = {
      videoURL: 'video/teaser.mp4'
    }
  }

  render () {
    return (
      <div className="video-contain">
        <video id="background-video" loop autoPlay>
          <source src={this.state.videoURL} type="video/mp4" />
          <source src={this.state.videoURL} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
    )
  }
};

export default VideoTeaser;
