const Sequelize = require('sequelize');
const sequelize = require('../config/connection.js');

// creates a 'user' model that matches up with DB
const User = sequelize.define('user', {
	
	// the user name
	username: Sequelize.STRING,
	// user gender
	gender: Sequelize.STRING,
	// user specific google login id
	googleID: Sequelize.STRING,
	// user thumbnail
	thumbnail: Sequelize.STRING
}, {
	timestamps: false
});

//sync w/ DB
User.sync();

module.exports = User;