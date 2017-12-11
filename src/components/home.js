import React, { Component } from 'react';
import Parallax from 'react-springy-parallax';

import VideoTeaser from './videoTeaser';

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
					<Parallax ref="parallax" pages={2}>

				    <Parallax.Layer offset={0} speed={1} style={{ backgroundColor: '#87BCDE' }} />
				    <Parallax.Layer offset={1} speed={1} style={{ 
				    		backgroundImage: "url('img/quote-pic.jpg')", 
				    		backgroundSize: 'cover',
				    		opacity: 0.6 
				    	}}/>

				    <Parallax.Layer offset={2} speed={1} />
				    <Parallax.Layer offset={3} speed={1} />
						
						<Parallax.Layer
				        offset={1}
				        speed={-0.1}
				        style={styles}
				        onClick={() => this.refs.parallax.scrollTo(2)}>
				        <Concept />
				    </Parallax.Layer>

				    <Parallax.Layer
				        offset={0}
				        speed={0.3}
				        style={styles}
				        onClick={() => this.refs.parallax.scrollTo(1)}>
				        <VideoTeaser />
				    </Parallax.Layer>
				    
				    <Parallax.Layer
				        offset={3}
				        speed={1}
				        style={styles}
				        onClick={() => this.refs.parallax.scrollTo(2)}>
				        <ConceptQuote />
				    </Parallax.Layer>
				</Parallax>
				}
			</div>
		)
	}
}


export default Home;