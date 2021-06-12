const express = require('express')();
const http = require('http').Server(express);
const io = require('socket.io')(http);
const mongoose = require('mongoose');

// Import dotenv and set path to env file
require('dotenv').config({path: __dirname + '/.env'});


// Set up mongoose connection
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// Pass io Object to socketIO API Module to allow user interactions
require('./app/apis/socketIO.js')(io);


http.listen(3000, () => {
    console.log('listening at :3000 ...')
})


/**
 * Services Tests
 */

const services = require('./app/services')

let carda = services.cardService.getNewCardStack()

let c = carda[0];
let d = carda[1];
// console.log(c);
// console.log(d);
// console.log(services.cardService.compareValue(d, c));



/**
 * DB Tests
 */

const room = require('./app/controllers/roomController');
const users = require('./app/controllers/userController');
let roomsArray = [];
let usersArray = [];

async function myFunc () {
    usersArray.push(await users.createUser({name: 'tom', socketID: '134141421424'}));
    roomsArray.push(await room.createRoom({code: 'asdf', roomMode: 'waiting', users: usersArray[0]._id}));
    console.log(usersArray);
    console.log(roomsArray);

};

myFunc();

