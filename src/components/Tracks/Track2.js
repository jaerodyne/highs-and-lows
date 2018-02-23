import React, { Component } from 'react';
import { Link, Element, Events, scroll, scrollSpy, scroller } from 'react-scroll';
import '../../index.css';

class Track2 extends Component{

  constructor (props){
      super(props);
      this.scrollToTop = this.scrollToTop.bind(this);

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
		  	We fall in and out of love
		  	Like we missed our moment
		  	And we’re trying to get it back each time
		  	But sometimes
		  `
	  )
	}

	verseTwo() {
		return (
		  `
				You don’t get second chances
				Sometimes you only get to try once
				And if you realize it too late
				Those regrets stay with you forever
		  `
	  )
	}


	verseThree() {
		return (
		  `
				And sometimes I feel bad for you
				But I can’t help myself
				You deserve it
				But it’s up to you to decide 
				When you want to stop 
				Punishing yourself
		  `
	  )
	}

	chorus() {
		return (
		  `
				Cause I forgave you long ago
				Story’s been told don’t you know?
				There’s no use in thinking about what could’ve been
				Cause all we have are battles we weren’t meant to win
		  `
	  )
	}

	verseFour() {
		return (
		  `
				So if there’s ever a shadow of a doubt
				Just let me bask in the afternoon glow
				You owe it to me
				To tell me what I need to know
				Just say leave and I will go 2x
		  `
	  )
	}

	bridge() {
		return (
		  `
				And I’m thinking so clearly now
		  `
	  )
	}

	outro() {
		return (
		  `
				You were the best thing that I never had 4x
		  `
	  )
	}

  render () {
    return (
      <div>
      	<div className="lyrics-nav">
	        <Link activeClass="active" to="verseOne" spy={true} smooth={true} duration={250} containerId="containerElement" style={{
	        		display:'inline', 
	        		float: 'left',
	        		clear: 'left',
	        		textAlign: 'right'
	        	}}>
	          Verse 1
	        </Link>

	        <Link activeClass="active" to="verseTwo" spy={true} smooth={true} duration={250} containerId="containerElement" style={{
	        		display:'inline', 
	        		float: 'left',
	        		clear: 'left',
	        		textAlign: 'right'
	        	}}>
	          Verse 2
	        </Link>

	        <Link activeClass="active" to="verseThree" spy={true} smooth={true} duration={250} containerId="containerElement" style={{
	        		display:'inline', 
	        		float: 'left',
	        		clear: 'left',
	        		textAlign: 'right'
	        	}}>
	          Verse 3
	        </Link>

	        <Link activeClass="active" to="chorus" spy={true} smooth={true} duration={250} containerId="containerElement" style={{
	        		display:'inline', 
	        		float: 'left',
	        		clear: 'left',
	        		textAlign: 'right'
	        	}}>
	          Chorus
	        </Link>

	        <Link activeClass="active" to="verseFour" spy={true} smooth={true} duration={250} containerId="containerElement" style={{
	        		display:'inline', 
	        		float: 'left',
	        		clear: 'left',
	        		textAlign: 'right'
	        	}}>
	          Verse 4
	        </Link>

	        <Link activeClass="active" to="chorus" spy={true} smooth={true} duration={250} containerId="containerElement" style={{
	        		display:'inline', 
	        		float: 'left',
	        		clear: 'left',
	        		textAlign: 'right'
	        	}}>
	          Back to Chorus
	        </Link>

	        <Link activeClass="active" to="bridge" spy={true} smooth={true} duration={250} containerId="containerElement" style={{
	        		display:'inline', 
	        		float: 'left',
	        		clear: 'left',
	        		textAlign: 'right'
	        	}}>
	          Bridge
	        </Link>

	        <Link activeClass="active" to="outro" spy={true} smooth={true} duration={250} containerId="containerElement" style={{
	        		display:'inline', 
	        		float: 'left',
	        		clear: 'left',
	        		textAlign: 'right'
	        	}}>
	          Outro
	        </Link>
	      </div>
        
        <Element name="lyricsText" className="element" id="containerElement" style={{
        	display: 'inline',
        	float: 'right',
          position: 'absolute',
          height:'600px',
          overflow:'scroll',
          marginBottom: '100px'
        }}>

          <Element name="verseOne" style={{
            marginBottom: '230px'
          }}>
          	<pre className="lyrics">
        		{this.verseOne()}
          	</pre>
          </Element>

          <Element name="verseTwo" style={{
            marginBottom: '200px'
          }}>
	         	<pre className="lyrics">
		      		{this.verseTwo()}
	        	</pre>
          </Element>


          <Element name="verseThree" style={{
            marginBottom: '300px'
          }}>
         	<pre className="lyrics">
	      		{this.verseThree()}
        	</pre>
          </Element>

          <Element name="chorus" style={{
            marginBottom: '200px'
          }}>
         	<pre className="lyrics">
	      		{this.chorus()}
        	</pre>
          </Element>

          <Element name="verseFour" style={{
            marginBottom: '300px'
          }}>
         	<pre className="lyrics">
	      		{this.verseFour()}
        	</pre>
          </Element>

          <Element name="bridge" style={{
            marginBottom: '200px'
          }}>
         	<pre className="lyrics">
	      		{this.bridge()}
        	</pre>
          </Element>

          <Element name="outro" style={{
            marginBottom: '200px'
          }}>
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
export default Track2;