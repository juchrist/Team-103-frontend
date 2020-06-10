import React from 'react';
import loadjs from 'loadjs';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/base.css';
import './css/vendor.css';
import './css/main.css';

//import Welcome from './controllers/welcome';
//import About from './controllers/about';
import Main from './components/main';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
	<Router>
		<div>
			<Route exact path='/' component={Main} />
		</div>
	</Router>,
document.getElementById('root'));

serviceWorker.unregister();
 
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA