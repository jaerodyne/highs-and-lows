import React, { Component } from 'react';
import Parallax from 'react-springy-parallax';

import Concept from './concept';
import ConceptQuote from './conceptQuote';

import TempoChart from './tempoChart';

import TrackOne from './trackOne';
import TrackTwo from './trackTwo';

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
				<button onClick={this.resetView}>Home</button>
				<Parallax ref="parallax" pages={3}>

				    <Parallax.Layer offset={0} speed={1} style={{ backgroundColor: '#805E73' }} />
				    <Parallax.Layer offset={1} speed={1} style={{ 
				    		backgroundImage: "url('img/quote-pic.jpg')", 
				    		backgroundSize: 'cover',
				    		opacity: 0.6 
				    	}}/>

				    <Parallax.Layer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

				    <Parallax.Layer
				        offset={0}
				        speed={0.3}
				        style={styles}
				        onClick={() => this.refs.parallax.scrollTo(1)}>
				        <Concept />
				    </Parallax.Layer>

				    <Parallax.Layer
				        offset={1}
				        speed={-0.1}
				        style={styles}
				        onClick={() => this.refs.parallax.scrollTo(2)}>
				        <ConceptQuote />
				    </Parallax.Layer>

				    <Parallax.Layer
				        offset={2}
				        speed={-0.1}
				        style={styles}
				        onClick={() => this.refs.parallax.scrollTo(0)}>
				        The end.
				    </Parallax.Layer>

				</Parallax>
				
			</div>
		)
	}
}
// {this.showTrack()}
// {this.state.viewTrack ? null :
// 	<TempoChart getTrack={this.getTrack}/>
// }

export default Home;