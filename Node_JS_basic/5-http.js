const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((result) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(result);
      })
      .catch((error) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(error.message);
      });
  } else if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }

  console.log(`Request method: ${req.method} - Request URL: ${req.url}`);
});

app.listen(1245);

module.exports = app;
