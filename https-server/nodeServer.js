const https = require('https');
const fs = require('fs');

const DIR_ADDRESS = '';

https
  .createServer(
    {
      key: fs.readFileSync(DIR_ADDRESS + '/key.pem', 'utf-8'),
      cert: fs.readFileSync(DIR_ADDRESS + '/cert.pem', 'utf-8'),
    },
    function (req, res) {
      res.write('Contrags! You made https server now :)');
      res.end();
    }
  )
  .listen(3001);
