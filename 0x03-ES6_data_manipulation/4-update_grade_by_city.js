export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }

  const gradeMap = newGrades.reduce((map, newGrade) => {
    map[newGrade.studentId] = newGrade.grade;
    return map;
  }, {});

  const updatedStudents = students.map(student => {
    if (student.location === city) {
      const grade = gradeMap[student.id] || 'N/A';
      return {
        ...student,
        grade
      };
    } else {
      return student;
    }
  });

  return updatedStudents;
}
