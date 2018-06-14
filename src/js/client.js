import React from 'react'
import ReactDOM from 'react-dom';
 
import createBrowserHistory from 'history/createBrowserHistory';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App.jsx'
 
import routes from './routes.jsx';
 
ReactDOM.render(
	<Router history={createBrowserHistory()} >
		<App {...routes.props}/>
	</Router>
  , document.getElementById('content')
);