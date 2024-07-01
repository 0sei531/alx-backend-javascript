export default function updateStudentGradeByCity(students, city, newGrades) {
  const cityStudents = students.filter(student => student.location === city);

  const gradeMap = newGrades.reduce((map, newGrade) => {
    map[newGrade.studentId] = newGrade.grade;
    return map;
  }, {});

  return cityStudents.map(student => ({
    ...student,
    grade: gradeMap[student.id] || 'N/A'
  }));
}
