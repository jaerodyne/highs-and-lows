import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Parallax from 'react-springy-parallax';

import VideoTeaser from './VideoTeaser';
import VideoTeaserTitle from './VideoTeaserTitle';
import Subscribe from './Subscribe';
import Concept from './Concept';
import ConceptQuote from './ConceptQuote';
import TempoChart from './TempoChart';

import Track1 from './tracks/Track1';
import Track2 from './tracks/Track2';
import Track3 from './tracks/Track3';
import Track4 from './tracks/Track4';
import Track5 from './tracks/Track5';
import Track6 from './tracks/Track6';
import Track7 from './tracks/Track7';
import Track8 from './tracks/Track8';
import Track9 from './tracks/Track9';
import Track10 from './tracks/Track10';
import Track11 from './tracks/Track11';
import Track12 from './tracks/Track12';
import Track13 from './tracks/Track13';

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
					return <Track1 />;
				case 2:
					return <Track2 />;
				case 3:
					return <Track3 />;
				case 4:
					return <Track4 />;
				case 5:
					return <Track5 />;
				case 6:
					return <Track6 />;
				case 7:
					return <Track7 />;
				case 8:
					return <Track8 />;
				case 9:
					return <Track9 />;
				case 10:
					return <Track10 />;
				case 11:
					return <Track11 />;
				case 12:
					return <Track12 />;
				case 13:
					return <Track13 />;
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
					<MuiThemeProvider>
						<div style={styles}>
							<VideoTeaserTitle />
							<VideoTeaser />
						</div>
					</MuiThemeProvider>
				}
			</div>
		)
	}
}

export default Home;