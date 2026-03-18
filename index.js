const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'OK', app: 'PRO ONLINE' }));
  } else {
    res.writeHead(200);
    res.end('API running');
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
