// var http = require('http');

// http.createServer(function (req, res) {
// res.writeHead(200, { 'Content-Type': 'text/html' });
// res.end('Hello, world! [helloworld sample; iisnode version is '
//     + process.env.IISNODE_VERSION + ', node version is ' + process.version + ']');
// }).listen(process.env.PORT); 

// server.js
// const express = require('express');
// const app = express();
// const port = process.env.PORT || 8080; // Default to 3000 if process.env.PORT is not set

// app.get('/app.js', (req, res) => {
//     res.send('Hello from Express on IIS!');
// });

// app.listen(port, () => {
//     console.log(`Express server listening on port ${port}`);
// });

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: process.env.PORT || 8888 });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        if (message == 'check') {
            ws.send('check');
        }
    });

    ws.send('something');
});


// const fs = require('fs');
// const https = require('https');
// const WebSocket = require('ws');

// // Load your SSL certificate and private key
// const server = https.createServer({
//     cert: fs.readFileSync('./certs/cert.pem'),
//     key: fs.readFileSync('./certs/key.pem')
// });

// const wss = new WebSocket.Server({ server });

// wss.on('connection', function connection(ws) {
//     ws.on('message', function incoming(message) {
//         console.log('received: %s', message);
//         if (message == 'check') {
//             ws.send('check');
//         }
//     });

//     ws.on('error', function error(error) {
//         console.log('WebSocket error:', error);
//     });


//     ws.send('something');
// });

// // Start the server
// server.listen(process.env.PORT || 8888, () => {
//     console.log(`Server started on port ${server.address().port}`);
// });

