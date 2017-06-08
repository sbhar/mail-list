// Get Dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

// Get our API routes
const api = require('./server/routes/api');

const app = express();

// Parsers for Post Data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.post('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Get Port from environment and store in express
const port = process.env.PORT || '8080';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));