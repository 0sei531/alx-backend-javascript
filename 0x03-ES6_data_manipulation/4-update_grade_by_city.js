function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }

  const studentsInCity = students.filter(student => student.location === city);

  const updatedStudents = studentsInCity.map(student => {
    const matchedGrade = newGrades.find(grade => grade.studentId === student.id);

    const grade = matchedGrade ? matchedGrade.grade : 'N/A';

    return {
      ...student,
      grade
    };
  });

  return updatedStudents;
}

export default updateStudentGradeByCity;
