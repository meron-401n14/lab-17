'use strict';

const net = require('net');
const socket = new net.Socket();

socket.connect(3001, 'localhost', () => {
  console.log('Connection to TCP server made');
});

const fs = require('fs');
const util = require('util');
const faker = require('faker');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const alterFile = async file => {
  try {
    let contents = await readFile(file);
    await writeFile(file, faker.lorem.sentence());
    console.log(`${file} saved`);
  } catch (e) { throw e; }
  
};

let file = process.argv.slice(2).shift();
alterFile(file);

socket.on('connection',  function (socket) {
  socket.emit('data', { event:'file created', payload:file} );
  console.log(`${file} saved`);
  socket.on('my other event', function (socket) {
    socket.emit('data', {event:'error', payload:file});
    console.log(`${file} err`);
  });
});










   










