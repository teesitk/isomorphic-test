import React from 'react';
 
// โหลดความสามารถของ react-router มาใช้งาน
//import { Route, Router, IndexRoute } from 'react-router';
//import createBrowserHistory from 'history/lib/createBrowserHistory';
import {
  Router,
  Route,
  Link,
} from 'react-router-dom'
 
// โหลด component ต่างๆ
import App from './components/App.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';

function handler(){
	console.log('wew')
}
// ระบุว่า path นี้จะถูก handle ด้วย component ไหน
export default (
    <Route exact component={App} onChange={this.handler}>
        <Route exact path="/" component={props => <Home {...props} />}/>
        <Route path="/home" component={props => <Home {...props} />}/>
        <Route path="/about" component={props => <About {...props} />}/>
    </Route>
);