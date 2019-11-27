'use strict';

const io = require('socket.io')(3000);

io.on('connection', (socket)=> {
  console.log('A socket connected', socket.id);
  socket.on('text', (load)=> {
    console.log('Text was emmitted', load);
  });

  io.emit('text',  { event: 'test', load: []});
});