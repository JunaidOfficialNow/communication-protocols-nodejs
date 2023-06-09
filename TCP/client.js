const net = require('net');

const tcpClient = net.createConnection({ port: 5678, host: 'localhost' }, () => {
  console.log('Connected to TCP server.');

  const message = 'Hello, TCP Server!\n';

  tcpClient.write(message);
});

tcpClient.on('data', (data) => {
  console.log(`Received TCP response: ${data}`);
});

tcpClient.on('end', () => {
  console.log('Disconnected from TCP server.');
});
