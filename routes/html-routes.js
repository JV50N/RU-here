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

    app.get('/mentor', (req,res) => {
        res.render('mentor');
    });

    app.get('/mentee', (req,res) => {
        res.render('mentee');
    });

    app.get('/connections', (req,res) => {
        res.send('this will be the connections page');
    });

    app.get('/edit', (req, res) => {
        res.send('this is where you will edit your profile');
    });

    app.get('/signup',(req,res)=>{
        res.render('signup');
    });

    // create login route
    // app.get()
   
}