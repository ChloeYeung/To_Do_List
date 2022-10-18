require("dotenv").config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");
const authJWTMiddleware = require("./middleware/jwt.middleware")
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//Setup Modules
var app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Init JWT 
app.use('/', indexRouter);
app.use('/users', authJWTMiddleware, usersRouter);

module.exports = app;
