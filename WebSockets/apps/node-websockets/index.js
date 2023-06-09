// import * as express from "express";
// import WebSocket from "ws";
const websocket = require('ws');

// const app = express();

const server = new websocket.Server({ port: 8080 });


server.on('connection', (socket)=> {
  console.log('client connected');

  socket.on('message', (message)=> {
       console.log('received message ' , message);

       socket.send('kiteekn tto');
  })

  socket.on('close', ()=> {
    console.log('client disconnected', socket);
  })
})