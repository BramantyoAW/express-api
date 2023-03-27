require('dotenv').config();
require("./auth/passport");
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser'); 
var indexRouter = require('./routes/index');
var usersRouter = require("./api/Users");
var usersLoginRouter = require("./api/Login");

var app = express();

app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/users', usersLoginRouter);

module.exports = app;
