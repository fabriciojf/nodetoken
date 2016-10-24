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

## Testing with  Postman

### Step 1: Generating the token

 - Insert the Url with POST method
 - In Body tab select '''''x-www-form-urlencoded'''''
 - Insert the params:
 -- key: '''''email'''''  - value: '''''fabriciojf@gmail.com'''''
 -- key: '''''password'''''  - value: '''''123'''''
 - Click:'''''Send'''''
 - Copy the token

### Step 2: Access the protected URL

 - Insert the Url with GET method
 - Select the '''''Headers''''' tab
 - Insert the params:
 -- key: '''''x-token''''' - value: INSERT-THE-TOKEN
 - Click: '''''Send'''''

### Author
[Fabricio Costa](http://fabriciojf.com) 