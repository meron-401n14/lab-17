'use strict';

const fs = require('fs');
const util = require('util');
const faker = require('faker');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);


const eventServer = net.createServer();

//saved connection pool

const connectionPool = [];

const alterFile = async file => {
  try {
    let contents = await readFile(file);
    await writeFile(file, faker.lorem.sentence());
    socket.write(faker.lorem.sentence({event:"file created", payload:contents}))
    console.log(`${file} saved`);
  } catch (e) {
    throw e;
  }
};

let file = process.argv.slice(2).shift();
alterFile(file);



eventServer.on('connection', socket => {
  console.log('Socket connected!!');
  connectionPool.push(socket);
});


app.listen(3000, () => {
  eventServer.listen(3001, () =>{
    console.log('API server up on 3000: event:server up on 3001');
  });
});