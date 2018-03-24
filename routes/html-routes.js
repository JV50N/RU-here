// dependencies
const router = require('express').Router();
// const authRoutes = require('routes/auth-routes.js');

//  '/'
//  '/login'
//  '/logout'
//  '/profile'

// routes
module.exports = (app) => {
    // each of the routes below handles the HTML page that the user gets sent to.

    // create home route
    app.get('/', (req, res) => {
    	res.render('index');
    });

    // create chat route
    app.get('/profile', (req, res) =>{
    	res.render('chat');
    });

    // create login route
    // app.get()
   
}