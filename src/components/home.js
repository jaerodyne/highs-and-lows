import React, { Component } from 'react';
import Parallax from 'react-springy-parallax';

import VideoTeaser from './videoTeaser';
import VideoTeaserTitle from './videoTeaserTitle';

import Concept from './concept';
import ConceptQuote from './conceptQuote';

import TempoChart from './tempoChart';

import TrackOne from './trackOne';
import TrackTwo from './trackTwo';
import TrackThree from './trackThree';

class Home extends Component {

	constructor(props) {
		super(props)
		
		this.state = {
			viewTrack: null
		}
		
		this.getTrack = this.getTrack.bind(this)
		this.showTrack = this.showTrack.bind(this)
		this.resetView = this.resetView.bind(this)
	}

	getTrack = (props) => {
		this.setState({viewTrack: props})
		this.showTrack()
	}

	showTrack(){
		if(this.state.viewTrack) {
			var track = this.state.viewTrack
			switch(track) {
				case 1:
					return <TrackOne />;
				case 2:
					return <TrackTwo />;
				case 3:
					return <TrackThree />;
				default:
					return null;
			}
		}
	}

	resetView() {
		this.setState({viewTrack: null})
	}

	render() {
		const styles = {
		    display: 'flex', 
		    alignItems: 'center', 
		    justifyContent: 'center'
		}
		return (
			<div>
				
				{this.state.viewTrack ? this.showTrack() 
					:
					<Parallax ref="parallax" pages={1}>

				    <Parallax.Layer
			        offset={0}
			        speed={0}
			        style={styles}
			      >
							<VideoTeaserTitle />
				      <VideoTeaser />
				    </Parallax.Layer>

				</Parallax>
				}
			</div>
		)
	}
}


export default Home;