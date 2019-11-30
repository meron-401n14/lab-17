'use strict';

// CLIENT
const net = require('net');
const socket = new net.Socket();
socket.connect(3001, 'localhost', () => {
  console.log('Connection to TCP server made');
});



socket.on('connection',  function (data) {
 
  console.log(`${data} changed successfully`);
  
});
socket.on('my other event', function (data) {
  console.log(`${data}  change error ReferenceError`);
  
});
