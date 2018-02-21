import React, { Component } from 'react';
import Parallax from 'react-springy-parallax';

import VideoTeaser from './VideoTeaser';
import VideoTeaserTitle from './VideoTeaserTitle';
import Subscribe from './Subscribe';
import Concept from './Concept';
import ConceptQuote from './ConceptQuote';
import TempoChart from './TempoChart';

import TrackOne from './TrackOne';
import TrackTwo from './TrackTwo';
import TrackThree from './TrackThree';
import TrackFour from './TrackFour';
import TrackFive from './TrackFive';
import TrackSix from './TrackSix';
import TrackSeven from './TrackSeven';
import TrackEight from './TrackEight';
import TrackNine from './TrackNine';
import TrackTen from './TrackTen';
import TrackEleven from './TrackEleven';
import TrackTwelve from './TrackTwelve';
import TrackThirteen from './TrackThirteen';

import Footer from './Footer';

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
				case 4:
					return <TrackFour />;
				case 5:
					return <TrackFive />;
				case 6:
					return <TrackSix />;
				case 7:
					return <TrackSeven />;
				case 8:
					return <TrackEight />;
				case 9:
					return <TrackNine />;
				case 10:
					return <TrackTen />;
				case 11:
					return <TrackEleven />;
				case 12:
					return <TrackTwelve />;
				case 13:
					return <TrackThirteen />;
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
					<div styles={styles}>
						<VideoTeaserTitle />
						<Subscribe />
						<VideoTeaser />
						<Footer />
					</div>
				}

			</div>
		)
	}
}

export default Home;