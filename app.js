"use strict";
var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cloudinary = require('cloudinary');
var cors = require('cors');
var mongoose = require('mongoose');

var routes = require('./routes/index');
var i18n = require("i18n");

i18n.configure({
    locales:['en', 'es'],
    directory: __dirname + '/locales'
});

var logger = require('morgan'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    passport = require('passport'),
    LocalStrategy = require('passport-local');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon(__dirname + '/public/imgs/logo-sm.jpg'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use(logger('combined'));
app.use(i18n.init);

//anonymous users can only access the home page
//returning false stops any more rules from being
//considered


app.use('/', routes);

// Handle 404 This needs to be at the end, as a final catch all route
app.use(function(req, res) {
    res.status(400);
    res.render('404', {});
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
