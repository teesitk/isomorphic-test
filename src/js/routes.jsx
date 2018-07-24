import React from 'react';
 
// โหลดความสามารถของ react-router มาใช้งาน
//import { Route, Router, IndexRoute } from 'react-router';
//import createBrowserHistory from 'history/lib/createBrowserHistory';
import {
  Router,
  Route,
  Link,
  browserHistory
} from 'react-router-dom'
 
// โหลด component ต่างๆ
import App from './components/App.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
 

browserHistory.listen( location =>  {
 console.log('ROUTED')
});
// ระบุว่า path นี้จะถูก handle ด้วย component ไหน
export default (
    <Route exact component={App}>
        <Route exact path="/" component={props => <Home {...props} />}/>
        <Route path="/home" component={props => <Home {...props} />}/>
        <Route path="/about" component={props => <About {...props} />}/>
    </Route>
);