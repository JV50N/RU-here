// DEPENDENCIES
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const passportSetup = require('./config/passport-setup');
const keys = require('./config/keys');
//socket.io
var socket = require('socket.io');
// cookie session
const cookieSession = require('cookie-session');
const passport = require('passport');

// set up the express app
const app = express();
const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => {
	console.log(`App now listening at PORT: ${PORT}`);
});

// socket.io setup
var io = socket(server);

io.on('connection', (socket) =>{
	console.log('socket is connected...', socket.id);
	// handle chat event
	socket.on('chat', (data) => {
		io.sockets.emit('chat', data);
	});

	socket.on('typing', (data) =>{
		socket.broadcast.emit('typing', data);
	});
});

// set up cookie session
app.use(cookieSession({
	// 24 hrs in miliseconds
	maxAge: 24 * 60 * 60 * 1000,
	keys: [keys.session.cookieKey]
}));

// initialize passport
app.use(passport.initialize());

// control log in
app.use(passport.session());

// models
// const db = require('./models');

// set up express app to handle data parsing
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));
// parse application
app.use(bodyParser.json());

// SET UP VIEW ENGINE
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

// Serve static content for the app from the "public" directory in the app directory
app.use(express.static("public"));

// set up routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

// app.use('/', htmlRoutes);

// // create home route
// app.get('/', (req, res) => {
// 	res.render('index');
// });

// routes
require('./routes/html-routes.js')(app);

// // syncing our sequelize models and then starting our express app
// db.sequelize.sync({force:true}).then(() => {
// 	app.listen(PORT, () => {
// 		console.log(`App now listening at PORT: ${PORT}`);
// 	});
// });

// LISTEN TO PORT
// app.listen(PORT, () => {
// 	console.log(`App now listening at PORT: ${PORT}`);
// });