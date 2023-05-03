const https = require('https');
const fs = require('fs');
const express = require('express');

const app = express();
const DIR_ADDRESS = '';

https
  .createServer(
    {
      key: fs.readFileSync(DIR_ADDRESS + '/key.pem', 'utf-8'),
      cert: fs.readFileSync(DIR_ADDRESS + '/cert.pem', 'utf-8'),
    },
    app.use('/', (req, res) => {
      res.send('Congrats! You made https server now :)');
    })
  )
  .listen(3001);
