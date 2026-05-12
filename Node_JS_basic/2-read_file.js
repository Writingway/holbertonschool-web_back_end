const { readFileSync } = require('fs');

module.exports = function countStudents(path) {
  let data;
  try {
    data = readFileSync(path, 'utf-8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const lines = data.trim().split('\n');
  const students = lines.slice(1).map((line) => line.split(','));
  const count = students.length;
  console.log(`Number of students: ${count}`);

  const fields = {};
  students.forEach((student) => {
    const field = student[3];
    if (!fields[field]) {
      fields[field] = [];
    }
    fields[field].push(student[0]);
  });

  for (const [field, names] of Object.entries(fields)) {
    console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
  }
};
