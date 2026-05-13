const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents('database.csv')
    .then((students) => {
      res.send(`${students}`);
    })
    .catch((error) => {
      res.send(`${error.message}`);
    });
});

app.listen(port, () => {
});

module.exports = app;
