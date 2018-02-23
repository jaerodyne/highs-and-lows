import React, { Component } from 'react';
import { Link, Element, Events, scroll, scrollSpy, scroller } from 'react-scroll';
import '../../index.css';

class Track11 extends Component{

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
		  	Knew a boy and they sent him out to sea
        Told him it would teach him how to be a man
        So they dressed him up in colors
        And taught him how to fight
        Now he's off defending somebody else's rights
		  `
	  )
	}

	chorus() {
		return (
		  `
				But what about his own? 4x
        Well what about it?
		  `
	  )
	}

  verseTwo() {
    return (
      `
        He's made his decision there's no turning back
        There's nothing that anyone can say
        So father, mother, brother, sister please understand
        He's waging war against lost souls and burying them in the sand
      `
    )
  }

  chorusTwo() {
    return (
      `
        But what about the cost? 4x
        Well he doesn't think about it
      `
    )
  }

  verseThree() {
    return (
      `
        Couldn't speak or breathe or even comprehend the total struggle
        Fighting with himself and everybody else
        But he's never been so sure that the poison has a cure
        So he holds on swears he'll make it to the end
      `
    )
  }
  
  chorusThree() {
    return (
      `
        But 
        What's it all for? 4x
        What is it
      `
    )
  }

  transitionToBridge() {
    return (
      `
        What about all those promises you made
        The love you gave
        And everybody else you're leaving behind
      `
    )
  }

	bridge() {
		return (
		  `
				And the rain comes down
        With the weight that he bears
        But he's been conditioned to accept the dares
        That test his strength and will
        And that gives him the license to kill
        Just don't lose yourself to the greater good
        Like so many others 4x
        But I know he knows what I know
		  `
	  )
	}

	outro() {
		return (
		  `
        But if we're fighting a losing battle
        How many more must we send out to sea?
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
export default Track11;