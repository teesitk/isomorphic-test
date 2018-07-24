import React from 'react';
import ReactDOM from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom'
 
import routes from './routes.jsx';
import App from './components/App.jsx';
import Home from './components/Home.jsx';
 
export default function(req, res) {

	const context = {}
	const markup = ReactDOM.renderToString(
	  <StaticRouter
	    location={req.url}
	    context={context}
	  >
	  	<App {...routes.props}/>
	  </StaticRouter>
	)

	if (context.url) {
	  console.warn('redirect')
	  redirect(301, context.url)
	} else {
		res.render("index.handlebars", {
            markup: markup
        });
	}
}