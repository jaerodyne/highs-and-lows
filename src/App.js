import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import Home from './components/Home';
import Bio from './components/Bio';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
		 <MuiThemeProvider>
	      <div className="App">
	        <Home />
	        <Footer />
	      </div>
     </MuiThemeProvider>
    );
  }
}

export default App;
