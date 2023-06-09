const net = require('net');

const tcpServer = net.createServer((socket) => {
  console.log(`New TCP connection established: ${socket.remoteAddress}:${socket.remotePort}`);

  socket.on('data', (data) => {
    console.log(`Received TCP data: ${data}`);
  });

  socket.on('end', () => {
    console.log(`TCP connection closed: ${socket.remoteAddress}:${socket.remotePort}`);
  });
});

tcpServer.listen(5678);
