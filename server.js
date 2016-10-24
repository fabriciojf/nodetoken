// base settings
var config = require('./app/config/default.config');

// imports
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var user = require('./app/models/user.model');
var routes = require('./app/routes/app.routes.js');
var port = process.env.PORT || config.server.port;

// database connection
mongoose.connect(config.database.host);

// body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// user base create
// http://localhost:PORT/setup
app.post('/setup', function (req, res) {
    var me = new user({
        name: "fabricio",
        email: "fabriciojf@gmail.com",
        password: "123",
    });

    me.save(function (err) {
        if (err) throw err;
        console.log("User created");
        res.json({             
            success: true,
            "message": "User created" 
        });
    });
});

// admin routes
// http://localhost:PORT/admin
app.use('/admin', routes);

// server start
app.listen(port);
console.log(`Server Running: http://${config.server.host}:${port}`);