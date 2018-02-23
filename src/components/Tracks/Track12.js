import React, { Component } from 'react';
import { Link, Element, Events, scroll, scrollSpy, scroller } from 'react-scroll';
import '../../index.css';

class Track12 extends Component{

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
		  	My mind is taking me over again
        Going through all the possibilities
        Don't think I'll ever get your voice out of my head
        A guilty conscience feeds my insecurities
		  `
	  )
	}

  preChorus() {
    return (
      `
        But I can't back down now
      `
    )
  }

	chorus() {
		return (
		  `
				Oh insomnia
        These sleepless nights take away all sanity
        Oh insomnia
        Stay awake 'cause you keep me up in the dead of night
        All the way til the dawning of daylight
		  `
	  )
	}

  verseTwo() {
    return (
      `
       Tired 'cause I can't think about this anymore
       Gotta find another distraction
       I'm focusing on what I shouldn't
       Fell apart 'cause I just couldn't
       Keep it all together for so long
      `
    )
  }

	outro() {
		return (
		  `
        You're expecting too much of me 3x
        And it keeps me up til the dead of the night
        All the way til the dawning of daylight
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
export default Track12;