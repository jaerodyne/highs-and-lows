import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, FormFeedback } from 'reactstrap';
// import subscribeUser from '../actions/index';

class Subscribe extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	email: '',
      invalidEmail: false,
      showSubscribe: false,
      validationMsg: ''
	  };
    
    this.onClick = this.onClick.bind(this);
	  this.onChange = this.onChange.bind(this);
	  this.onSubmit = this.onSubmit.bind(this);
	}

  onClick() {
    const currentState = this.state.showSubscribeText;
    this.setState({showSubscribeText: !currentState });
  }

  onChange(e) {
    this.setState({email: e.target.value});
    if(e.target.value !== '' && this.state.invalidEmail ) {
      this.setState({
        invalidEmail: false
      })
    }
  }

	onSubmit(e) {
    e.preventDefault()
    if (this.state.email === '') {
      this.setState({
        invalidEmail: true,
        validationMsg: "That email doesn't exist. Maybe it's your other one?"
      })
    } else {
      this.setState({invalidEmail: false})
    }

    // const URL = `http://localhost:3000`
    
    // fetch(`${URL}/subscribers`, {
    //  method: 'POST',
    //  headers: {
    //    'Accept': 'application/json',
    //    'Content-Type': 'application/json'
    //  },
    //  body: JSON.stringify({
    //     "subscriber": {
    //      "email": this.state.email
    //     }
    //  }),
    // })
    // .then(function(response) {
    //  console.log(response)
    //  return response.json()
    // }).catch((error) => {
    //    return error
    // })

  }

  subscribeText() {
    return (
      <div className="subscribe-text">
        <h4>Get updates on our debut album release</h4>
        <Input invalid={this.state.invalidEmail} onChange={this.onChange} placeholder="youremail@example.com" type="email"/>
        <FormFeedback>{this.state.validationMsg}</FormFeedback>
        <Button color="primary" type="submit">Submit</Button>
      </div>
    )
  }

	render() {
		return (
			<Form onSubmit={this.onSubmit} className="text-center">
        <FormGroup>
          <div className="subscribe-arrow" onClick={this.onClick}>{'\u25BD'}</div>
          {this.state.showSubscribeText ? this.subscribeText() : null }
        </FormGroup>
      </Form>
		);
	}
}

export default Subscribe;