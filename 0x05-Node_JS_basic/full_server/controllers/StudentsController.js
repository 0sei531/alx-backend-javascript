import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response, DATABASE) {
    readDatabase(DATABASE)
      .then((fields) => {
        const students = [];
        let msg;

        students.push('This is the list of our students');

        for (const key of Object.keys(fields)) {
          msg = `Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`;
          students.push(msg);
        }

        response.status(200).send(students.join('\n'));  // Use status before sending the response
      })
      .catch((error) => {
        console.error(error);  // Log the error for debugging
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response, DATABASE) {
    const { major } = request.params;

    const validMajors = ['CS', 'SWE'];
    if (!validMajors.includes(major)) {
      return response.status(400).send('Major parameter must be CS or SWE');
    }

    readDatabase(DATABASE)
      .then((fields) => {
        const students = fields[major];

        if (students) {
          response.status(200).send(`List: ${students.join(', ')}`);
        } else {
          response.status(404).send('Major not found');
        }
      })
      .catch((error) => {
        console.error(error);  // Log the error for debugging
        response.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
