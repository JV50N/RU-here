const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
const User = require('../models/users');

// serialize user
passport.serializeUser((user, done) => {
    // store id into a cookie
    return done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

// create new google strategy
passport.use(
    new GoogleStrategy({
        //options for the strategy
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, (accessToken, refreshToken, profile, done) => {
        
        //passport call back function
        // console.log('it works');
        console.log(profile);
        // check if user exists in DB
        User.findOne({
            where: {
                googleID: profile.id

            }
        }).then((currentUser) => {
            if (currentUser) {
                // already have the user
                console.log(`User is: ${currentUser}`);
                // begin to serialize user
                return done(null, currentUser);

            } else {
                // create new user
                let data = {
                    username: profile.displayName,
                    gender: profile.gender,
                    googleID: profile.id,
                    thumbnail: profile._json.image.url
                };

                User.create(data).then((newUser, created)=>{
                    console.log(`New User Created: ${newUser}`);
                    return done(null, newUser);
                });              
                    
                }
                
                })
                
            }));


