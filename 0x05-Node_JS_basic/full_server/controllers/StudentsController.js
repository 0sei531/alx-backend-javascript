import { readDatabase } from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const studentsByField = await readDatabase(process.argv[2]);
      const message = ['This is the list of our students'];

      Object.keys(studentsByField)
        .sort((a, b) => a.localeCompare(b))
        .forEach((field) => {
          const students = studentsByField[field];
          message.push(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
        });

      return res.status(200).send(message.join('\n'));
    } catch (err) {
      return res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    try {
      const { major } = req.params;
      if (major !== 'CS' && major !== 'SWE') {
        return res.status(500).send('Major parameter must be CS or SWE');
      }

      const studentsByField = await readDatabase(process.argv[2]);
      const students = studentsByField[major];
      return res.status(200).send(`List: ${students.join(', ')}`);
    } catch (err) {
      return res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
