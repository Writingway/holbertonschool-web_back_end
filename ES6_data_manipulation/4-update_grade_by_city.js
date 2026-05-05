export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.map((student) => {
    if (student.location === city) {
      // If a student doesn't have grade in newGrades, the final grade should be N/A.
      const gradeInfo = newGrades.find((grade) => grade.studentId === student.id);
      student.grade = gradeInfo ? gradeInfo.grade : "N/A";
    }
    return student;
  });
}