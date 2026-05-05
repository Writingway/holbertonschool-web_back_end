export default function updateStudentGradeByCity(students, city, newGrades) {
  // Use map and filter combined
  return students.map(student => {
    if (student.location === city) {
      const gradeInfo = newGrades.find(grade => grade.studentId === student.id);
      if (gradeInfo) {
        return { ...student, grade: gradeInfo.grade };
      } else {
        return { ...student, grade: "N/A" };
      }
    }
    return student;
  });
}