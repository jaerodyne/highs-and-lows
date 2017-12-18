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
            <div>
               {/* <h1>Jillian Somera and the Beta Option</h1>
                <h2>The Making of Highs and Lows</h2>*/}
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
