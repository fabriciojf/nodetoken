// base settings
var config = require('../config/default.config');

// imports
var router = require('express').Router();
var user = require('../models/user.model');
var jwt = require('jsonwebtoken');
var appsec = config.secret.key;

// login route
// and return token
// http://localhost:PORT/admin/auth
router.post('/auth', function (req, res) {

    // user database validate
    user.findOne({
        email: req.body.email
    }, function (err, user) {

        if (err) throw err;
        if (!user) {
            res.json({ 
                success: false, 
                message: 'User not found' 
            });
        } else if (user) {

            if (user.password != req.body.password) {
                res.json({ 
                    success: false, 
                    message: 'Wrong password.' 
                });
            } else {

                // token generated expires in 24h
                var token = jwt.sign(user, appsec, {
                    expiresIn: 1440 
                });

                // return the token
                res.json({
                    success: true,
                    message: 'Congratulations! Your token is:',
                    token: token
                });
            }
        }
    });
});

// token validation
router.use(function (req, res, next) {

    var token = req.headers['x-token'];

    if (token) {
        jwt.verify(token, appsec, function (err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Invalid token.' });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.status(403).send({
            success: false,
            message: 'No token.'
        });
    }
});

// base route 
// http://localhost:PORT/admin
router.get('/', function (req, res) {
    res.json({ 
        message: 'May the force be with you!' 
    });
});

// user route
// http://localhost:PORT/admin/users
router.get('/users', function (req, res) {
    user.find({}, function (err, users) {
        res.json(users);
    });
});

module.exports = router;