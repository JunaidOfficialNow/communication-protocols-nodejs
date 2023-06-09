const dgram = require('dgram');

const udpClient = dgram.createSocket('udp4');

const message = Buffer.from('Hello, UDP Server!');

udpClient.send(message, 0, message.length, 1234, 'localhost', (err) => {
  if (err) {
    console.error(`Error sending UDP message: ${err}`);
  } else {
    console.log('UDP message sent successfully.');
  }

  udpClient.close();
});
