import React, { Component } from 'react';

class ConceptQuote extends Component {

	quote(){
		return (
			`
			"It all came together at the end because this album is a snapshot of my life and the highs and lows that I've been through. It was an apt way to summarize my collective experiences. Sometimes, it really is that simple."
			`
		)
	}

	render() {
		return (
			<div>
				<p className="concept-quote">{this.quote()}</p>
			</div>
		);
	}
}

export default ConceptQuote;