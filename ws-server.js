const WebSocket = require('ws');

var Client = require('node-rest-client').Client;

var client = new Client();

const wss = new WebSocket.Server({ port: 2000 });

var request = require('request');
var fs = require('fs');
wss.on('connection', function connection(ws) {


request
  .get('http://localhost:8081/api/v1/namespaces/default/pods/hello-minikube-6c47c66d8-29mgt/log?_preload_content=true&follow=true')
  .on('data', function(response) {
 ws.send(new Buffer(response).toString('ascii'));
  }).on('error', function(err) {
    console.log(err)
  })
  .pipe(fs.createWriteStream('response'))
});
