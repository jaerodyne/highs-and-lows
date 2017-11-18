import React, { Component } from 'react';

class Concept extends Component {

	conceptText() {
		return (
		  `
		  	The album's name came about as Jillian was trying to come up with a song order for the album. She then had the idea to organize the songs according to their tempo markings by literally drawing them out on paper.

		  		It was important to her to avoid stagnation as much as possible and create a tension and a variety of sounds that compelled the listener to follow the progression of the album the whole way through.

		  		She tends to be an idealist.
		  `
	  )
	}

	render() {
		return (
			<div className="concept">
				<h1>Concept</h1>
				<p>{this.conceptText()}</p>
			</div>
		);
	}
}

export default Concept;