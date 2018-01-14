import React, { Component } from 'react';
import subscribeUser from '../actions/index';

class Subscribe extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	email: ''
	  };

	  this.onChange = this.onChange.bind(this)
	  this.onSubmit = this.onSubmit.bind(this)
	}

	onChange(e) {
		this.setState({email: e.target.value})
	}

	onSubmit(e) {
    // this.props.subscribeUser(this.state.email)
    const URL = `http://localhost:3000`
  	
  	fetch(`${URL}/subscribers`, {
  		method: 'POST',
  		headers: {
  	   'Accept': 'application/json',
  	   'Content-Type': 'application/json'
  		},
  		body: JSON.stringify({
  			email: this.state.email
  		}),
  	})
  	.then(function(response) {
  		console.log(response)
  		return response.json()
  	}).catch((error) => {
     	return error
    })
    
    e.preventDefault()
  }

	render() {
		return (
			<div>
			<form onSubmit={this.props.onSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.email} onChange={this.onChange} />
        </label>
        <input type="button" value="Submit" />
      </form>
			</div>
		);
	}
}

export default Subscribe;