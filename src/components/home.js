import React, { Component } from 'react';
import Script from 'react-load-script'
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

	handleScriptCreate() {
    this.setState({ scriptLoaded: false })
  }

  handleScriptError() {
    this.setState({ scriptError: true })
  }

  handleScriptLoad() {
    this.setState({ scriptLoaded: true })
  }

	render() {
		const parallaxBkgd = {
			// backgroundColor: 'white'
			backgroundColor: '#4a2f3c',
			opacity: '0.8'
		}
		return (
			<div>
				{this.state.viewTrack ? this.showTrack() 
					:
					<div>
						<Desktop>
							<Parallax ref="parallax" pages={4}>

								<Row>
									<Col md="12">
										<Parallax.Layer offset={0.6} speed={0.6}>
											<div className="bkgd-img">
												<img src="/img/album-cover-background.jpg" alt=""/>
											</div>
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
							        onClick={() => this.refs.parallax.scrollTo(0.4)}
							      >
											<VideoTeaserTitle />
								    </Parallax.Layer>
								  </Col>
								</Row>
								

								<Row>
							    <Parallax.Layer
						        offset={0.9}
						        speed={1.1}
						        onClick={() => this.refs.parallax.scrollTo(1)}
						      >
						      	<div className="album-title-header">
							     		<h1>Highs and Lows</h1>
						      	</div>
							    </Parallax.Layer>
								</Row>

								<Row>
									<Col md="12">
										<Parallax.Layer offset={1} speed={0.7}>
											<div className="bkgd-img">
												<img src="../img/album-cover-background-2.jpg" alt=""/>
											</div>
										</Parallax.Layer>
									</Col>
								</Row>

								<Row>
									<Col sm="12">
										<Parallax.Layer offset={1} speed={0.7} style={parallaxBkgd} />
									</Col>
								</Row>
								
								<Row>
									<Parallax.Layer
								    offset={1.05}
								    speed={4}
								    onClick={() => this.refs.parallax.scrollTo(2)}
							    >
										<Col sm="12" style={{marginLeft: '20px'}}>
											<h1 className="text-center" style={{color: 'white'}}>DEBUT ALBUM AVAILABLE NOW</h1>	
											<h2 className="text-center" style={{color: 'white'}}>ON ALL MAJOR STREAMING PLATFORMS</h2>	
			    	    		</Col>
									</Parallax.Layer>
								</Row>

								<Row>
									<Col md="4 text-right">
										<Parallax.Layer
										    offset={1.2}
										    speed={1.1}
								    >
								    </Parallax.Layer>
										<Parallax.Layer
										    offset={1.3}
										    speed={1.1}
								    >
				    		    	<Col sm="12">
    		    	    			<a href="http://bit.ly/highsandlows-amazon">
    		    	    	  		<img src="../img/amazon-logo-grey.png" alt="Listen on Amazon" width="35%" height="35%"style={{padding: '6px'}}/>
    		    		      	</a>
				    	    		</Col>
								    </Parallax.Layer>
								    <Parallax.Layer
										    offset={1.46}
										    speed={1.1}
								    >
								    	<Col sm="12">
								    		<a href="http://bit.ly/highsandlows-itunes">
								      		<img src="../img/us-uk-itunes-store-get-badge-rgb-012618.svg" alt="Get on iTunes" width="35%" height="35%" style={{padding: '7px'}}/>
								      	</a>
								    	</Col>
								    </Parallax.Layer>
								    <Parallax.Layer
										    offset={1.58}
										    speed={1.1}
								    >
								    	<Col sm="12">
								    		<a href="http://bit.ly/highsandlows-applemusic">
							    	  		<img src="../img/us-uk_apple_music_badge_rgb.svg" alt="Listen on Apple Music" width="35%" height="35%" style={{padding: '7px'}}/>
								      	</a>
								    	</Col>
								    </Parallax.Layer>
								    <Parallax.Layer
										    offset={1.7}
										    speed={1.1}
								    >
								    	<Col sm="12">
							    			<a href="http://bit.ly/highsandlows-googleplay">
							    	  		<img src="../img/google-play-badge.png" alt="Listen on Google Play" width="35%" height="35%" style={{padding: '6px'}}/>
							    	  	</a>
								    	</Col>
								    </Parallax.Layer>
									</Col>
									<Col md="4" className="text-center">
								    <Parallax.Layer
									    offset={1.27}
									    speed={1}
								    >
								    	<div>
								    		<iframe src="https://open.spotify.com/embed?uri=spotify:album:76UmyyHrUavg49MOzx77wE" width="350" height="360" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="highs-and-lows-spotify"></iframe>
								    		<iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:3qQ0Zv5eTJIbeAnSHyxXef?si=Z8ivcjfHTMKoPb0eRCx6wg&size=detail&theme=dark" width="350" height="56" scrolling="no" frameBorder="0" style={{border:'none', marginTop: '10px', overflow:'hidden'}} allowtransparency="true"></iframe>
								    	</div>
								    </Parallax.Layer>
									</Col>
									<Col md="4">
								    <Parallax.Layer
										    offset={1.3}
										    speed={1.1}
								    >
								    	<Col sm="12" style={{paddingLeft: '11px'}}>
								    		<a href="http://bit.ly/highsandlows-album">
								    	  	<img src="../img/bandcamp-logotype-light-128.png" alt="Listen on Bandcamp" width="45%" height="45%" />
								      	</a>
								    	</Col>
								    </Parallax.Layer>
								     <Parallax.Layer
										    offset={1.45}
										    speed={1.1}
								    >
								    	<Col sm="12" style={{paddingLeft: '25px'}}>
								    		<a href="http://bit.ly/highsandlows-tidal">
							    	  		<img src="../img/tidal-logo.png" alt="Listen on Tidal" width="40%" height="40%" />
								      	</a>
								    	</Col>
								    </Parallax.Layer>
					    	    <Parallax.Layer
					    			    offset={1.56}
					    			    speed={1.1}
					    	    >
					    	    	<Col sm="12" style={{paddingLeft: '25px'}}>
					    	    		<a href="http://bit.ly/highsandlows-youtube">
					        	  		<img src="../img/yt_logo_mono_dark.png" alt="Listen on Youtube" width="40%" height="40%" style={{padding: '7px'}}/>
					    	      	</a>
					    	    	</Col>
					    	    </Parallax.Layer>
								    <Parallax.Layer
										    offset={1.7}
										    speed={1.1}
								    >
								    	<Col sm="12" style={{paddingLeft: '25px'}}>
						    	  		<img src="../img/pandora_wordmark_white.png" alt="Listen on Pandora" width="41%" height="41%" style={{opacity: '0.3', padding: '7px'}}/>
						    	  		<span style={{color: 'white'}}>COMING SOON</span>
								    	</Col>
								    </Parallax.Layer>
									</Col>
								</Row>

							  <Row>
								  <Col sm="12">
										<Parallax.Layer
							        offset={2.14}
							        speed={5}
							      >
							      	<div className="show-dates-bkgd">
								      	<img src="../img/album-show-recap.jpg" alt=""/>
							      	</div>
								    </Parallax.Layer>
									</Col>	
							  </Row>
								<Row style={{textAlign: 'center'}}>
									<Col sm={{size: 8, offset: 2}}>
										<Parallax.Layer
							        offset={2.29}
							        speed={0.1}
							      >
								      <a href="https://www.songkick.com/artists/9718779" class="songkick-widget" data-theme="dark" data-track-button="on" data-detect-style="true" data-background-color="transparent" data-font-color="#eeeded">Show Dates</a>
								      <Script
			                  url="//widget.songkick.com/9718779/widget.js"
			                  onCreate={this.handleScriptCreate.bind(this)}
			                  onError={this.handleScriptError.bind(this)}
			                  onLoad={this.handleScriptLoad.bind(this)}
			                />
								    </Parallax.Layer>
									</Col>
							  </Row>
								<Row className="bio-row">
									<Col sm="12" md="5" className="no-col-margin hide-album">
								    <Parallax.Layer
									    offset={3}
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
										    offset={3}
										    speed={7}
									     	style={{backgroundColor: 'white'}}
								    >
								    		<Bio />
								    </Parallax.Layer>
									</Col>
								</Row>

								<Row className="footer-row">
									<Parallax.Layer
										offset={3.65}
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
										<Col md="12 text-center">
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
    	    		<h1>Listen Now</h1>
							<Row>
								<Col xs="12">
									<iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:3qQ0Zv5eTJIbeAnSHyxXef?si=Z8ivcjfHTMKoPb0eRCx6wg&size=detail&theme=light" width="350" height="56" scrolling="no" frameBorder="0" style={{border:'none', marginLeft: '2em', overflow:'hidden'}} allowtransparency="true"></iframe>
	    	    		</Col>
	    	    	</Row>
	    	    	<Row style={{marginTop: '1em'}}>
								<Col xs={{ size: 4, offset: 1 }} style={{marginLeft: '3em', paddingLeft: '0', paddingRight: '0'}}>
				    			<a href="http://bit.ly/highsandlows-googleplay">
				    	  		<img src="../img/google-play-badge.png" alt="Listen on Google Play" width="100%" height="80%"/>
				    	  	</a>
					    	</Col>
								<Col xs={{ size: 3}} style={{marginLeft: '0.8em', paddingRight: '15px'}}>
					    		<a href="http://bit.ly/highsandlows-itunes">
					      		<img src="../img/itunes-store-icon-blk.svg" alt="Get on iTunes" width="90%" height="80%"/>
					      	</a>
					    	</Col>
								<Col xs="2" style={{padding: '0'}}>
					    		<a href="http://bit.ly/highsandlows-applemusic">
				    	  		<img src="../img/apple-music-icon-blk.svg" alt="Listen on Apple Music" width="90%" height="80%"/>
					      	</a>
					    	</Col>
					    	<Col xs="2">
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
				}
			</div>
		)
	}
}

export default Home;