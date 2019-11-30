'use strict';
 //const express = require('express');
const net = require('net');
const uuid = require('uuid/v4');
var server = require('http').Server();

//const io = require('socket.io')(3000);
 //const app = express();

const eventServer = net.createServer();
const connectionPool = [];

// This creates our Socket!! we should save these somewhere and use them in our HTTP handlers
eventServer.on('connection', socket => {
  console.log('Socket connected!!');
  connectionPool.push(socket);
});


server.listen(3000, () => {
  eventServer.listen(3001, () => {
    console.log('API server up on 3000 : Event server up on 3001');
  });
});