const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const port = process.env.port || 4001;
const index = require('./routes/index');

const app = express();
app.use(index);

const server = http.createServer(app);

const io = socketIo(server,{
  cors : {
    origin: '*',
    methods: ['GET', 'POST']
  }
 });

io.on('connection', socket => {
  console.log('User connected:', socket.id);
  socket.on('disconnect', () => console.log('User desconnected:', socket.id))
});

io.on('connection', socket => {
  socket.on('chat message', msg => {
    console.log('user says:', msg);
    io.emit('chat message', msg);
  });
});

server.listen(port , () => console.log('listenin on port', port));