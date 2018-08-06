import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Parallax from 'react-springy-parallax';
import { Row, Col } from 'reactstrap';
import Responsive from 'react-responsive';

import VideoTeaser from './VideoTeaser';
import VideoTeaserTitle from './VideoTeaserTitle';
import Subscribe from './Subscribe';
import Bio from './Bio';
// import Concept from './Concept';
// import ConceptQuote from './ConceptQuote';
// import TempoChart from './TempoChart';
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

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

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
			// backgroundColor: 'white'
			backgroundColor: '#4a2f3c'
		}
		return (
			<div>
				{this.state.viewTrack ? this.showTrack() 
					:
					<MuiThemeProvider>
						<div>
							<Desktop>
								<Parallax ref="parallax" pages={3}>

									<Row>
										<Col md="12">
											<Parallax.Layer offset={0.6} speed={0.6}>
												<div className="bkgd-img">
													<img src="../img/album-cover-background.jpg" alt=""/>
												</div>
											</Parallax.Layer>
										</Col>
									</Row>
									
									<Row>
										<Col sm="12">
									    <Parallax.Layer
								        offset={1.6}
								        speed={1}
								        style={{backgroundColor: '#212529'}}
								      >
								      </Parallax.Layer>
								    </Col>
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
							        offset={0.9}
							        speed={1.1}
							      >
							      	<div className="album-title-header">
								     		<h1>Highs and Lows</h1>
							      	</div>
								    </Parallax.Layer>
									</Row>

									<Row>
										<Col sm="12">
											<Parallax.Layer offset={1} speed={0.8} style={parallaxBkgd} />
										</Col>
									</Row>

									<Row>
										<Col sm="12">
											<Parallax.Layer offset={1} speed={1} style={{backgroundColor: '#212529'}} />
										</Col>
									</Row>

									<Row>
										<Col sm="12">
									    <Parallax.Layer
								        offset={1.5}
								        speed={1.5}
								        style={{backgroundColor: '#212529'}}
								      >
								      	<div className="text-center">
									      	<Col sm="12">
									      		<a href="http://bit.ly/highsandlows-googleplay">
										      		<img src="../img/google-play-badge.png" width="11%" height="11%" style={{padding: '6px', verticalAlign: 'middle'}}/>
										      	</a>
									      	</Col>
									      	<Col sm="12">
									      		<a href="http://bit.ly/highsandlows-apple">
										      		<img src="../img/us-uk-itunes-store-get-badge-rgb-012618.svg" width="11%" height="11%" style={{padding: '7px', verticalAlign: 'middle'}}/>
										      	</a>
									      	</Col>
									      	<Col sm="12">
									      		<a href="http://bit.ly/highsandlows-amazon">
										      		<img src="../img/amazon-logo-grey.png" width="11%" height="11%"style={{padding: '6px', verticalAlign: 'middle'}}/>
										      	</a>
									      	</Col>
									      	<Col sm="12">
									      		<a href="http://bit.ly/highsandlows-apple">
										      		<img src="../img/us-uk-apple-music-lockup-all-white.svg" width="11%" height="11%" style={{padding: '7px', verticalAlign: 'middle'}}/>
										      	</a>
									      	</Col>
									      	<Col sm="12">
									      		<a href="http://bit.ly/highsandlows-album">
										      		<img src="../img/bandcamp-logotype-light-128.png" width="12%" height="12%"style={{verticalAlign: 'middle'}}/>
										      	</a>
									      	</Col>
									      	<Col sm="12">
									      		<a href="http://bit.ly/highsandlows-tidal">
										      		<img src="../img/tidal-logo.png" width="10%" height="10%" style={{verticalAlign: 'middle'}}/>
										      	</a>
									      	</Col>
									      	<Col sm="12">
										      	<iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:3qQ0Zv5eTJIbeAnSHyxXef?si=akYAhAGQRieE-8Rz0IQm7g&size=basic&theme=dark" width="200" height="30" scrolling="no" frameborder="0"  style={{border:'none', overflow: 'hidden'}} allowtransparency="true"></iframe>
									      	</Col>
								      	</div>
									    </Parallax.Layer>
									  </Col>
									</Row>

									<Row className="bio-row">
										<Col sm="12" md="5" className="no-col-margin hide-album">
									    <Parallax.Layer
										    offset={2}
										    speed={3}
									     	onClick={() => this.refs.parallax.scrollTo(1)}
									     	style={{backgroundColor: 'white'}}
									    >
									    	<div className="bio-album-cover">
									    		<img src="../img/album-cover.jpg" alt=""/>
									    	</div>
									    </Parallax.Layer>
										</Col>
										<Col sm="12" md="7" className="no-col-margin bio-mobile">
											<Parallax.Layer
											    offset={2}
											    speed={7}
										     	style={{backgroundColor: 'white'}}
									    >
									    		<Bio />
									    </Parallax.Layer>
										</Col>
									</Row>

									<Row className="footer-row">
										<Parallax.Layer
											offset={2.7}
											speed={1}
										>
											<Footer />
										</Parallax.Layer>
									</Row>
								
								</Parallax>
								<div className="float-right">
									<Row className="subscribe float-right">
										
									</Row>
								</div>
								
							</Desktop>

							<Tablet>
									<Parallax ref="parallax" pages={2} style={parallaxBkgd}>

										<Row>
											<Col md="12">
												<Parallax.Layer
									        offset={0.5}
									        speed={1.8}
									        className="tablet-title-bkgd"
									      >
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
											<Col md="12">
												<Parallax.Layer offset={0.99} speed={0.6}>
													<div className="bkgd-img">
														<img src="../img/album-cover.jpg" alt=""/>
													</div>
												</Parallax.Layer>
											</Col>
										</Row>
											
										<Row>
											<Col md="12">
												<Parallax.Layer offset={1} speed={0.7} className="bkgd-bio" />
											</Col>
										</Row>

										<Row className="bio-row">
											<Col md="12" className="no-col-margin hide-album">
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
											<Col md="12" className="no-col-margin bio-mobile">
												<Parallax.Layer
												    offset={1.19}
												    speed={7}
										    >
										    		<Bio />
										    </Parallax.Layer>
											</Col>
										</Row>

										<Row className="footer-row">
											<Parallax.Layer
												offset={1.6}
												speed={1}
											>
												<Footer />
											</Parallax.Layer>
										</Row>
									
									</Parallax>	
							</Tablet>

							<Mobile>
								<Row>
									<Col xs="12" className="mobile-background">
								  	<VideoTeaserTitle/>
									</Col>
								</Row>
								<Row>
									<Col xs="12">
								  	<div className="bio-album-cover">
							    		<img src="../img/album-cover.jpg" alt=""/>
							    	</div>
									</Col>
								</Row>
								<Row>
									<Col xs="12">
										<Bio />
									</Col>
								</Row>
								<Row className="footer-row">
									<Col xs="12">
										<Footer />
									</Col>
								</Row>
							</Mobile>
						</div>
					</MuiThemeProvider>
				}
			</div>
		)
	}
}

export default Home;