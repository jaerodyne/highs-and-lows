import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
		 <MuiThemeProvider>
	      <div className="App">
	        <Home />
	      </div>
     </MuiThemeProvider>
    );
  }
}

export default App;
