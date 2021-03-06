var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./models/User.js')
var app = express();
var jwt = require('./services/jwt.js');
app.use(bodyParser.json());

// setup some middleware to enable CORS
app.use(function (req, res, next) {
    'use strict';
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.post('/register', function (req, res) {
    var user = req.body;

    var newUser = new User.model({
        email: user.email,
        password: user.password
    });

    var payload = {
        iss: req.host,
        sub: user._id
    };

    var token = jwt.encode(payload, "shhh..");

    newUser.save(function (err) {
        res.status(200).send({
            user: newUser.toJSON(),
            token: token
        });
    })
})

mongoose.connect('mongodb://localhost/mean-example');

var server = app.listen(3000, function () {
    console.log('api listening on ', server.address().port);
});