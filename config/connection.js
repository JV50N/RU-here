// dependencies
const Sequelize = require('sequelize');

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