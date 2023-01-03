export default function updateStudentGradeByCity(arr, city, newGrades) {
  if (!(arr instanceof Array)) return [];
  const newarr = arr.filter((stud) => stud.location === city);
  newarr.map((fstud) => {
    // eslint-disable-next-line
        fstud.grade = 'N/A';
    newGrades.map((gr) => {
      if (gr.studentId === fstud.id) {
        // eslint-disable-next-line
                fstud.grade = gr.grade;
      }
      return null;
    });
    return fstud;
  });
  return newarr;
}
