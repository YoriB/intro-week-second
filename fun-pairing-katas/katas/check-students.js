/*
  The function checkStudents should take a list of students and a cohort and return true if all students are in the given cohort and false if any students are not in the given cohort.
  E.g. checkStudents([
    {name: 'Ben', cohort: 'October'},
    {name: 'Amanda', cohort: 'April'},
    {name: 'Matt', cohort: 'April'}
  ], 'April')
  --> false
  */

function checkStudents(students, month) {
  for (let i = 0; i < students.length; i++) {
    if (students.length < 1 || month === '') {
      return undefined;
    } else if (students[i].cohort === month) {
      return true;
     
      
    } else if (students[i].cohort !== month) {
      return false;
    }

   
  }
}

module.exports = checkStudents;
