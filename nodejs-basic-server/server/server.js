const http = require('http');

const IP = 'localhost';
const PORT = 4999;

const CORSHeader = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept',
  'Access-Control-Max-Age': 20,
};

const server = http.createServer((request, response) => {
  if (request.method === 'OPTIONS') {
    response.writeHead(200, CORSHeader);
    response.end();
  } else if (request.method === 'POST') {
    let body = [];
    request
      .on('error', (error) => {
        console.error(error);
      })
      .on('data', (chunk) => {
        body.push(chunk);
      })
      .on('end', () => {
        body = Buffer.concat(body).toString();
        response.writeHead(200, CORSHeader);
        response.end(body);
      });
  }
});

server.listen(PORT, IP, () => {
  console.log(`http server is listening on ${IP}:${PORT}`);
});
