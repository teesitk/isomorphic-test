import React from 'react';
 
// โหลดความสามารถของ react-router มาใช้งาน
//import { Route, Router, IndexRoute } from 'react-router';
//import createBrowserHistory from 'history/lib/createBrowserHistory';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
 
// โหลด component ต่างๆ
import App from './components/App.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
 
// ระบุว่า path นี้จะถูก handle ด้วย component ไหน
export default (
    <Route exact component={App}>
        <Route exact path="/" component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
    </Route>
);