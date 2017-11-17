import React, { Component } from 'react';
import Concept from './concept';
import TrackOne from './trackOne';
import TrackTwo from './trackTwo';
import TempoChart from './tempoChart';

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
		return (
			<div>
				<button onClick={this.resetView}>Home</button>
				<Concept />
				{this.showTrack()}
				{this.state.viewTrack ? null :
					<TempoChart getTrack={this.getTrack}/>
				}
			</div>
		)
	}
}

export default Home;