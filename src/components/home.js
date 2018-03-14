import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Parallax from 'react-springy-parallax';
import { Container, Row, Col } from 'reactstrap';

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
		const bkgdBioStyles = {
			backgroundColor: 'white',
			border: 'solid 10px black',
			opacity: '0.99',
			outlineStyle: 'solid',
	    outlineColor: 'white',
			height: '100%',
			width: '100%'
		}
		const styles = {
	    // border: 'solid 1px black'
		}
		return (
			<div>
				{this.state.viewTrack ? this.showTrack() 
					:
					<MuiThemeProvider>
							
						<Parallax ref="parallax" pages={2} style={parallaxBkgd}>

							<Row>
								<Col md="12">
									<Parallax.Layer offset={0.6} speed={0.6}>
										<div className="bkgd-img">
											<img src="../img/album-cover.jpg" alt=""/>
										</div>
									</Parallax.Layer>
								</Col>
							</Row>
							
							<Row className="container-fluid">
								<Parallax.Layer offset={1} speed={0.7} className="bkgd-bio" />
							</Row>
							
							<Row>
								<Col sm="12">
									<Parallax.Layer
						        offset={0}
						        speed={2}
						      >
							      <VideoTeaser />
							    </Parallax.Layer>
								</Col>	
						  </Row>
							<Row>
								<Col sm="12 text-center">
							    <Parallax.Layer
						        offset={0}
						        speed={1.8}
						      >
										<VideoTeaserTitle />
							    </Parallax.Layer>
							  </Col>
							</Row>
							
							<Row>
						    <Parallax.Layer
					        offset={0.8}
					        speed={0.7}
					      >
					      	<div className="album-title-header">
						     		<h1>Highs and Lows</h1>
					      	</div>
						    </Parallax.Layer>
							</Row>

							<Row className="bio-row">
								<Col xs="12" s="12" md="5" className="no-col-margin hide-album">
							    <Parallax.Layer
								    offset={1}
								    speed={3}
							     	onClick={() => this.refs.parallax.scrollTo(0)}
							    >
							    	<div className="bio-album-cover">
							    		<img src="../img/album-cover.jpg" alt=""/>
							    	</div>
							    </Parallax.Layer>
								</Col>
								<Col xs="12" s="12" md="7" className="no-col-margin bio-mobile">
									<Parallax.Layer
									    offset={1}
									    speed={7}
							    >
							    		<Bio />
							    </Parallax.Layer>
								</Col>
							</Row>
							
							<Row className="footer-row">
								<Parallax.Layer
									offset={1.7}
									speed={1}
								>
									<Footer />
								</Parallax.Layer>
							</Row>

						</Parallax>	
					</MuiThemeProvider>
				}
			</div>
		)
	}
}

export default Home;