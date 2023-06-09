const dgram = require('dgram');

const udpServer = dgram.createSocket('udp4');

udpServer.on('message', (message, rinfo) => {
  console.log(`Received UDP message: ${message} from ${rinfo.address}:${rinfo.port}`);
});

udpServer.on('listening', () => {
  const address = udpServer.address();
  console.log(`UDP server listening on ${address.address}:${address.port}`);
});

udpServer.bind(1234); 
