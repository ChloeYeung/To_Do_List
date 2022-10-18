require("dotenv").config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");
const authJWTMiddleware = require("./middleware/jwt.middleware")
const {logErrors, clientErrorHandler, errorHandler} = require("./middleware/error.middleware")
var indexRouter = require('./routes/index');
var todoListRouter = require('./routes/todo');
var authRouter = require('./routes/auth');
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
app.use('/auth', authRouter);
app.use('/todo', authJWTMiddleware, todoListRouter);

// Error handling
app.use(logErrors)
app.use(clientErrorHandler)
app.use(errorHandler)

module.exports = app;
