import fs from 'fs';

async function readDatabase(filePath) {
  try {
    const data = await fs.promises.readFile(filePath, 'utf8');
    const students = data.trim().split('\n').map((line) => line.split(',')[0]);

    const studentsByField = students.reduce((acc, name) => {
      const [field, ...rest] = name.split(' ');
      if (!acc[field]) {
        acc[field] = [];
      }
      acc[field].push(rest.join(' '));
      return acc;
    }, {});

    return studentsByField;
  } catch (err) {
    throw err;
  }
}

export { readDatabase };
