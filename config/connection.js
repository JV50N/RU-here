// dependencies
const Sequelize = require('sequelize');
const keys = require('./keys');

var db = keys.herokuDb.db;
var user = keys.herokuDb.user;
var pw = keys.herokuDb.pw;
// var host = 'k3xio06abqa902qt.cbetxkdyhwsb.us-east-1.rds.amazonaws.com';

// creates mySQL connection using Sequelize
const sequelize = new Sequelize('ruhere_db', 'root', 'root', {
	host: 'localhost',
	dialect: 'mysql',
	port: 3306,
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	}
});

// Exports the connection for other files to use
module.exports = sequelize;