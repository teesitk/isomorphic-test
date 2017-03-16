import React from 'react'
import ReactDOM from 'react-dom';
 
// โหลดความสามารถของ react-router มาใช้งาน
//import { Router, browserHistory } from 'react-router';
//import { ReduxRouter } from 'redux-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
//import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App.jsx'
 
// โหลด route ต่างๆ ที่เราได้กำหนดไว้
import routes from './routes.jsx';
 
// render ลงไปใน DOM ที่ #content
ReactDOM.render(
	<Router history={createBrowserHistory()} >
		<App {...routes.props}/>
	</Router>
  , document.getElementById('content')
);