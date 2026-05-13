const http = require('http');
const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf8').then((data) => {
    const lines = data.split('\n').filter((l) => l.trim() !== '');
    const students = lines.slice(1); // skip header

    if (students.length === 0) throw new Error('No students found');

    const fields = {};
    for (const line of students) {
      const [firstname, , , field] = line.split(',');
      if (!fields[field]) fields[field] = [];
      fields[field].push(firstname);
    }

    let output = `Number of students: ${students.length}`;
    for (const [field, names] of Object.entries(fields)) {
      output += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
    }
    return output;
  });
}

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    return;
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((result) => {
        res.end(`This is the list of our students\n${result}`);
      })
      .catch((err) => {
        res.end(`This is the list of our students\n${err.message}`);
      });
    return;
  }
  res.end('Hello Holberton School!');
});

app.listen(1245);
module.exports = app;