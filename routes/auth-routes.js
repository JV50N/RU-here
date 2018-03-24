const router = require('express').Router();
const passport = require('passport');

// auth login route
router.get('/login', (req, res) => {
    res.render('login');
});

// auth logout route
router.get('/logout', (req, res) => {
    //handle with passport.js
    // res.send('logging out. . .');
    req.logout(); // passport function 
    res.redirect('/'); // redirect to root
});

// auth with google
router.get('/google', passport.authenticate('google', {scope: ['profile']}));

// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
	// testing
	// res.send(req.user);
	// redirect to user profile
	res.redirect('/profile');
});

module.exports = router;