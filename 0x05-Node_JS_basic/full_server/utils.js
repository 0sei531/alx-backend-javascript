const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      const content = data.split('\n').filter(Boolean).map(item => item.split(','));
      const [header, ...students] = content;  // Destructure to separate header from students

      const fields = {};
      students.forEach((student) => {
        const field = student[3];
        if (!fields[field]) fields[field] = [];
        fields[field].push(student[0]);
      });

      resolve(fields);
    });
  });
}

export default readDatabase;
