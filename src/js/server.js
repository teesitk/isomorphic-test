import path from 'path';
import express from 'express';
import exphbs from 'express-handlebars';
import favicon from 'serve-favicon';
import router from './router.jsx';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './components/App.jsx';

 
var app = express();
//app.use(favicon(path.join(__dirname, '../../public/images/favicon.ico')));
app.use(express.static('public'));
app.use(router);
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '../templates'));
 
//var port = process.env.TIMES || 3000;
var server = app.listen(process.env.PORT || 3000, function() {
    //var host = server.address().address;
    var host = 'node-teesitk.herokuapp.com';
    var port = server.address().port;
    console.log('listening at https://%s:%s', host, port);
});
 

 
app.get('*', function(req, res){
    res.render("index.handlebars", {
        markup: ReactDOMServer.renderToString(React.createElement(App))
    });
});