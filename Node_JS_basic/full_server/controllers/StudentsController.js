const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase('database.csv')
      .then((students) => {
        const fields = Object.keys(students).sort((a, b) =>
          a.toLowerCase().localeCompare(b.toLowerCase()),
        );

        let response = 'This is the list of our students\n';

        fields.forEach((field) => {
          const list = students[field];
          const names = list.join(', ');

          response += `Number of students in ${field}: ${list.length}. List: ${names}\n`;
        });

        res.send(200, response.trim());
      })
      .catch((error) => {
        res.send(500, error.message);
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.send(500, 'Major parameter must be CS or SWE');
      return;
    }

    readDatabase('database.csv')
      .then((students) => {
        const list = students[major] || [];
        const names = list.join(', ');
        res.send(200, `List: ${names}`);
      })
      .catch((error) => {
        res.send(500, error.message);
      });
  }
}

module.exports = StudentsController;
