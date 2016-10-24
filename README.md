## Installing and Running

### Node Token
Simple example of WebToken generation in Node Js server with MongoDB

### Requirements
 - Node.js
 - MongoDB

### Install
Clone or Fork the project: 
```console
$ git clone https://github.com/fabriciojf/nodetoken.git
$ cd nodetoken
```

Run npm install
```console
$ npm install
```

Run the server
```console
$ node server.js
```

### The WebToken 

NPM Dependency 
```console
$ npm install jsonwebtoken --save
```

Generating the Token
```javascript
 var jwt = require('jsonwebtoken');
 var user = THE-USER-MODEL
 var token = jwt.sign(user, app.get('appsec'), {});
```

Validating the Token
```javascript
function (req, res, next) {
    var token = req.headers['x-token'];
    if (token) {
        jwt.verify(token, appsec, function (err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Invalid token.' });
            } else {
                req.decoded = decoded;
                next();
            }
        }
    }
    else {
       return res.status(403).send({
            success: false,
            message: 'No token.'
        }); 
    }
}
```            

## Testing with  Postman

Get the postman 

 - [Postman Official WebSite](https://www.getpostman.com/) 

### Step 1: Generating the token

 - Open the Postman
 - Insert the Url with POST method
 - In Body tab select ***x-www-form-urlencoded***
 - Insert the params:
 -- key: ***email***  - value: ***fabriciojf@gmail.com***
 -- key: ***password***  - value: ***123***
 - Click:***Send***
 - Copy the token

### Step 2: Access the protected URL

 - Open the Postman
 - Insert the Url with GET method
 - Select the ***Headers*** tab
 - Insert the params:
 -- key: ***x-token*** - value: INSERT-THE-TOKEN
 - Click: ***Send***

### Author
[Fabricio Costa](http://fabriciojf.com) 