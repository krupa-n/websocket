const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:2000');

ws.on('open', function open() {
  console.log('opened');
 // ws.send('something');
});

ws.on('message', function incoming(data) {
  console.log(data);
});
ws.on('close', function close() {
  console.log('closed');
});
