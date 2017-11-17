import React, { Component } from 'react';

class Concept extends Component {

	conceptText() {
		return (
		  `
		  	The album's name came about as Jillian was trying to come up with a song order for the album. She then had the idea to organize the songs according to their tempo markings by literally drawing them out. The result is this chart.

		  		It was important to her to avoid stagnation as much as possible and create a tension and a variety of sounds that compelled the listener to follow the album's progression the whole way through.

		  		She tends to be an idealist.

		  		"It all came together at the end because this album is a snapshot of my life and the highs and lows that I've been through. It was an apt way to summarize my collective experiences. Sometimes, it really is that simple."
		  `
	  )
	}

	render() {
		return (
			<div>
				<h1>Concept</h1>
				<p className="concept">{this.conceptText()}</p>
			</div>
		);
	}
}

export default Concept;