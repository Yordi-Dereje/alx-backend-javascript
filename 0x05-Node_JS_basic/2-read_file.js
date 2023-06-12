const fs = require('fs');

function countStudents(filepath) {
  let data;
  try {
    data = fs.readFileSync(filepath, 'utf-8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  const students = data.split('\n')
    .map((student) => student.split(','))
    .filter((student) => student.length === 4 && student[0] !== 'firstname')
    .map((student) => ({
      name: student[0],
      field: student[3],
    }));
  const csStudents = students
    .filter((student) => student.field === 'CS')
    .map((student) => student.name);
  const sweStudents = students
    .filter((student) => student.field === 'SWE')
    .map((student) => student.name);
  console.log(`Number of students: ${students.length}`);
  console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
  console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
}

module.exports = countStudents;
