import React from 'react';
import ReactDOM from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom'
 
import routes from './routes.jsx';
import App from './components/App.jsx';
import Home from './components/Home.jsx';
 
export default function(req, res) {
    /*matchPath({ routes, location:req.url }, (error, redirectLocation, renderProps) => {
        res.render("index.handlebars", {
            markup: ReactDOM.renderToString(<StaticRouter {...renderProps} />)
        });
    });*/

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
	  // Somewhere a `<Redirect>` was rendered
	  console.warn('redirect')
	  redirect(301, context.url)
	} else {
	  // we're good, send the response
		res.render("index.handlebars", {
            markup: markup
        });
	}
}