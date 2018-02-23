import React, { Component } from 'react';

class SampleTracks extends Component {
	render() {
		return (
			<div class="Player">
				<div class="Background"></div>
				<div class="Header">
					<div class="Title">Now Playing</div>
				</div>
				<div class="Artwork">
					
				</div>
				<div class="TrackInformation">
					<div class="Name">We Were Young</div>
					<div class="Artist">Odesza</div>
					<div class="Album">Summer's Gone (2012)</div>
				</div>
				<div class="Scrubber">
					<div class="Scrubber-Progress"></div>
				</div>
				<div class="Controls">
					<div class="Button">
						<i class="fa fa-fw fa-play"></i>
					</div>
				</div>
				<div class="Timestamps">
					<div class="Time Time--current">0</div>
					<div class="Time Time--total">192</div>
				</div>
				<audio>
					<source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/wwy.mp3" />
				</audio>
			</div>
		);
	}
}

export default SampleTracks;