import React, { Component } from 'react';
import Parallax from 'react-springy-parallax';

import VideoTeaser from './VideoTeaser';
import VideoTeaserTitle from './VideoTeaserTitle';

import MailingList from './MailingList';
import Subscribe from './Subscribe';

import Concept from './Concept';
import ConceptQuote from './ConceptQuote';

import TempoChart from './TempoChart';

import TrackOne from './TrackOne';
import TrackTwo from './TrackTwo';
import TrackThree from './TrackThree';

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
			<Subscribe />
				
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

				    <Parallax.Layer
			        offset={0.2}
			        speed={0}
			        style={styles}
			      >
				    </Parallax.Layer>
						
						<Parallax.Layer
							offset={0.44}
							speed={0}
							style={styles}
						>
							<Footer />
						</Parallax.Layer>
				</Parallax>
				}

			</div>
		)
	}
}


export default Home;