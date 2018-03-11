import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Parallax from 'react-springy-parallax';

import VideoTeaser from './VideoTeaser';
import VideoTeaserTitle from './VideoTeaserTitle';
import Subscribe from './Subscribe';
import Bio from './Bio';
import Concept from './Concept';
import ConceptQuote from './ConceptQuote';
import TempoChart from './TempoChart';
import Footer from './Footer';

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
		const parallaxBkgd = {
			backgroundColor: '#4a2f3c'
		}
		const bkgdImgStyles = {
			backgroundImage: "url('../img/album-cover.jpg')"
		}
		const albumTitleStyles = {
			display: 'flex', 
	    alignItems: 'center', 
	    justifyContent: 'center'
		}
		const bkgdBioStyles = {
			backgroundColor: 'white',
			opacity: '0.9'
		}
		const bioStyles = {
			
		}
		const bioTextStyles = {
			marginLeft: 'auto'
		}
		const styles = {
	    display: 'flex', 
	    alignItems: 'center'
		}
		const footerStyles = {
			display: 'flex',
			justifyContent: 'center',
			height: '100%',
			width: '100%'
		}
		return (
			<div>
				{this.state.viewTrack ? this.showTrack() 
					:
					<MuiThemeProvider>
						<Parallax ref="parallax" pages={2} style={parallaxBkgd}>

						<Parallax.Layer offset={0.5} speed={0.6} style={bkgdImgStyles} />
						<Parallax.Layer offset={1} speed={0.7} style={bkgdBioStyles} />
							
							<Parallax.Layer
				        offset={0}
				        speed={2}
				        style={styles}
				      >
					      <VideoTeaser />
					    </Parallax.Layer>

					    <Parallax.Layer
				        offset={0}
				        speed={1.8}
				        style={styles}
				      >
								<VideoTeaserTitle />
					    </Parallax.Layer>

					    <Parallax.Layer
				        offset={0.8}
				        speed={0.7}
				        style={albumTitleStyles}
				      >
				     		<h1 className="album-title-header">Highs and Lows</h1>
					    </Parallax.Layer>
			
							<div style={bioStyles}>
						    <Parallax.Layer
							    offset={1}
							    speed={3}
						     	onClick={() => this.refs.parallax.scrollTo(0)}
						    >
						    	<div className="bio-container">
						    		<img src="../img/album-cover.jpg" alt="" />
						    		<Bio />
						    	</div>
						    </Parallax.Layer>
							</div>/
							
							<Parallax.Layer
								offset={1.75}
								speed={1}
								style={footerStyles}
							>
								<Footer />
							</Parallax.Layer>

						</Parallax>	
					</MuiThemeProvider>
				}
			</div>
		)
	}
}

export default Home;