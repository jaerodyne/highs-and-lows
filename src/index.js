import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands';
import { faGlobe } from '@fortawesome/fontawesome-free-solid';

fontawesome.library.add(brands, faGlobe)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
