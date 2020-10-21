const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const Router = require('./Router');

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());


//console.log('Testing Server')

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'Password',
	database: 'react_users'

});

db.connect(function(err)
{
	if(err)
	{
		console.log('DB error');
		throw err;
		return false;
	}
});

const sessionStore = new MySQLStore(
{
	expiration: (600000*15),
	endConnectionOnClose: false
},db);

app.use(session({
	key: 'Thisiskey1234',
	secret: 'thisissecret1234',
	store: sessionStore,
	resave: false,
	saveUninitialized: false,
	cookie:
	{
		maxAge: (600000 *15),
		httpOnly: false
	}
}));

new Router(app, db);

app.get('/', function(req, res)
{
	res.sendFile(path.join(__dirname, 'build','index.html'));

});

app.listen(3000);