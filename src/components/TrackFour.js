import React, { Component } from 'react';
import { Link, Element, Events, scroll, scrollSpy, scroller } from 'react-scroll';
import '../index.css';

class TrackFour extends Component{

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
		  	Excuse me while I collect myself
        'Cause lately I've been falling apart
        Don't know what I'm doing
        Don't know where I should go
        I'm lost caught in the undertow
		  `
	  )
	}

	verseTwo() {
		return (
		  `
				Bright lights blinding me
        On and off they go
        Sudden darkness envelopes my soul
        Keep on smiling
        'Cause I'm putting on a show
        The charade ends as the curtains close
		  `
	  )
	}

	chorus() {
		return (
		  `
				The days pass by
        I'm floating through life
        Just a passerby
        Will I sink or swim
        Drifting into sleep
        Wondering what's the next day like
        Hear a lullaby
        But there's nobody singing to me now
		  `
	  )
	}

	verseThree() {
		return (
		  `
				I'm waiting for my second wind
        Some inspired revelation
        Anything to get out of this twisted situation
        Come up standing tall
        Getting back into that grind
        Fighting back the enemy that is my troubled mind
		  `
	  )
	}

	bridge() {
		return (
		  `
				Oh oh oh oh oh oh oh (and then a couple more times)
		  `
	  )
	}

	outro() {
		return (
		  `
        But there's nobody singing to me now
        But there's nobody singing to me now
        But there's nobody singing to me now
				But there's nobody singing to me now
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
export default TrackFour;