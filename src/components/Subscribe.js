import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, FormFeedback } from 'reactstrap';
// import subscribeUser from '../actions/index';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

class Subscribe extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	email: '',
      invalidEmail: false,
      showSubscribe: false,
      showSuccess: false,
      showFailure: false,
      validationMsg: ''
	  };
    
    this.onClick = this.onClick.bind(this);
	  this.onChange = this.onChange.bind(this);
	  this.onSubmit = this.onSubmit.bind(this);
    this.createSubscriber = this.createSubscriber.bind(this);
	}

  createSubscriber(email){
    const URL = `http://localhost:3000`
    
    const response = fetch(`${URL}/subscribers`, {
     method: 'POST',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({
        "subscriber": {
         "email": email
        }
     }),
    })
    .then(function(response) {
      return response
    })
    .catch((error) => {
      return error
    })

    // if(json.status === 201) {
    //     console.log(json.status)
    //     this.setState({showSuccess: true})
    //   } else {
    //     this.setState({showFailure: true})
    //   }
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
      if (EMAIL_REGEX.test(this.state.email)) {
        this.setState({invalidEmail: false})
        this.createSubscriber(this.state.email)
      } else {
        this.setState({
          invalidEmail: true,
          validationMsg: "Oops, something went wrong."
        })
      }
    }
  }

  subscribeText() {
    return (
      <div className="subscribe-text">
        <p>Get updates on our debut album release</p>
        <Input invalid={this.state.invalidEmail} onChange={this.onChange} placeholder="youremail@here.com" type="email"/>
        <FormFeedback>{this.state.validationMsg}</FormFeedback>
        {this.state.showSuccess ? "Success!" : null }
        {this.state.showFailure ? "Error" : null }
        <Button color="primary" type="submit">Submit</Button>
      </div>
    )
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit} className="text-center">
        <FormGroup>
          <div className="subscribe-arrow" onClick={this.onClick}>{ this.state.showSubscribeText ? '\u25BD' : '\u25B2' }</div>
          {this.state.showSubscribeText ? this.subscribeText() : null }
        </FormGroup>
      </Form>
		);
	}
}

export default Subscribe;