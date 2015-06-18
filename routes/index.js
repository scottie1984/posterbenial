"use strict";
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('index');
});

router.get('/es', function(req, res) {
    res.setLocale('es')
    res.render('index');
});

router.get('/en', function(req, res) {
    res.setLocale('en')
    res.render('index');
});

module.exports = router;
