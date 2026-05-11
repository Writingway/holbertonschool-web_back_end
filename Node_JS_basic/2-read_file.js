const { readFile } = require('fs');


module.exports = function countStudents(path) {
  readFile(path, (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
    const lines = data.toString().split('\n');
    const students = {};
    for (let i = 1; i < lines.length; i++) {
      if (lines[i]) {
        const [firstName, lastName, age, field] = lines[i].split(',');
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstName);
      }
    }
    console.log(`Number of students: ${lines.length - 1}`);
    for (const field in students) {
      console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
    }
  });
}

