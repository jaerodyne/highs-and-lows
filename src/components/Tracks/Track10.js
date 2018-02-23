import React, { Component } from 'react';
import { Link, Element, Events, scroll, scrollSpy, scroller } from 'react-scroll';
import '../../index.css';

class Track10 extends Component{

  constructor (props){
      super(props)

      this.state = {
        selected: false
      }

      this.onSetActive = this.onSetActive.bind(this)

      this.verseOne = this.verseOne.bind(this)
      this.verseTwo = this.verseTwo.bind(this)
      this.chorus = this.chorus.bind(this)
      this.verseThree = this.verseThree.bind(this)
      this.outro = this.outro.bind(this)
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });

    scrollSpy.update();

  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  scrollToWithContainer() {

    let goToContainer = new Promise((resolve, reject) => {

      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });

    });

    goToContainer.then(() =>  
      scroller.scrollTo('scroll-container-second-element', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
          containerId: 'scroll-container'
      }
     ));

    goToContainer.then(() =>  
      scroller.scrollTo('scroll-container-third-element', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
          containerId: 'scroll-container'
      }
     ));

    goToContainer.then(() =>  
      scroller.scrollTo('scroll-container-fourth-element', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
          containerId: 'scroll-container'
      }
     ));
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

	verseOne() {
		return (
		  `
		  	I can't believe I did it again
        Put you above everything again
        I expected too much
        And you fell short again
		  `
	  )
	}

  verseTwo() {
    return (
      `
        I'm an optimist
        But your attitude turns me cynical
        Always judging
        So hypercritical
        How can I have faith when all you do is disappoint me?
      `
    )
  }

  chorus() {
    return (
      `
        But it's hard because you bring out the worst in me
        And all I want to do is hurt you
        To make you feel the way that I feel
        And I don't want to be this way
        But I can't help but say what I need to say
      `
    )
  }
  
  verseThree() {
    return (
      `
        Tried to do everything right
        But I always get it wrong
        Self-destruct because this drink's too strong
        Every drop is honey to the muse that sings along
      `
    )
  }

  verseFour() {
    return (
      `
        So here's a toast to you and my loneliness
        A toast to the ghost and the demon enchantress
        'Cause I've been seduced by the darkness again
        The light is dimming this hole is sinking
        And at this point 
        I've got to stop thinking
        That I'm so alone
      `
    )
  }

	bridge() {
		return (
		  `
				And I know
        You can't save me
        You can't save me
        'Cause I
        I can't even save myself
        No no I can't even save myself
        Ooooh Ooooh Ooooh Ooooh
		  `
	  )
	}

  onSetActive(){
    console.log('this is active')
    this.setState({selected: true})
  }

  render () {
    return (
      <div>
      	<div className="lyrics-nav">
	        <Link activeClass="active" to="verseOne" spy={true} smooth={true} duration={250} containerId="containerElement" onSetActive={this.onSetActive} className={this.state.selected ? 'selected-lyric':''}>
	          Verse 1 /&nbsp;
	        </Link>

	        <Link activeClass="active" to="verseTwo" spy={true} smooth={true} duration={250} containerId="containerElement">
	          Verse 2 /&nbsp;
	        </Link>

	        <Link activeClass="active" to="chorus" spy={true} smooth={true} duration={250} containerId="containerElement">
	          Chorus /&nbsp; 
	        </Link>

	        <Link activeClass="active" to="verseThree" spy={true} smooth={true} duration={250} containerId="containerElement">
	          Verse 3 /&nbsp; 
	        </Link>

	        <Link activeClass="active" to="bridge" spy={true} smooth={true} duration={250} containerId="containerElement">
	          Bridge /&nbsp; 
	        </Link>

	        <Link activeClass="active" to="outro" spy={true} smooth={true} duration={250} containerId="containerElement">
	          Outro
	        </Link>
	      </div>
        
        <Element name="lyricsText" className="element" id="containerElement">

          <Element name="verseOne">
          	<pre className="lyrics">
          		{this.verseOne()}
          	</pre>
          </Element>

          <Element name="verseTwo">
	         	<pre className="lyrics">
		      		{this.verseTwo()}
	        	</pre>
          </Element>

          <Element name="chorus">
           	<pre className="lyrics">
  	      		{this.chorus()}
          	</pre>
          </Element>

          <Element name="verseThree">
           	<pre className="lyrics">
  	      		{this.verseThree()}
          	</pre>
          </Element>

          <Element name="bridge">
           	<pre className="lyrics">
  	      		{this.bridge()}
          	</pre>
          </Element>

          <Element name="outro">
           	<pre className="lyrics">
  	      		{this.outro()}
          	</pre>
          </Element>
        </Element>
      </div>
    );
  }
};
// <a onClick={this.scrollToTop}>To the top!</a>
export default Track10;