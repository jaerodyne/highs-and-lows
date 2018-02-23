import React, { Component } from 'react';
import { Link, Element, Events, scroll, scrollSpy, scroller } from 'react-scroll';
import '../../index.css';

class Track6 extends Component{

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
		  	Let's think for a second if you care
        Expect to see you standing there
        Trying to find reasons why
        I stuck around just to dry out hanging on a string
        That you laid out for wounds to sting
        Open hearts are yours to break
        There's no give just a lot of take
		  `
	  )
	}

	chorus() {
		return (
		  `
				'Cause I stand no chance when it comes to you
        'Cause you'd rather keep our secrets in the dark corners of your mind
        And you prefer your busy life
        And pushing me aside
        'Cause I'm nothing to you
        But I gave you everything I had
		  `
	  )
	}

  verseTwo() {
    return (
      `
        I'm only writing words
        Having this conversation with myself
        Feeling the dusty item you left on the shelf
        Of your life
        And it won't be long before you throw me up
        You've used me up and drained me dry
        There's no explanation why
      `
    )
  }

	bridge() {
		return (
		  `
				How does it feel?
        To know that you're always gonna be alone? 2x

        How does it feel?
        Well how do you feel?
        I guess I'll never really know
		  `
	  )
	}

	outro() {
		return (
		  `
        Oooh
        'Cause I stand no chance against you
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
export default Track6;