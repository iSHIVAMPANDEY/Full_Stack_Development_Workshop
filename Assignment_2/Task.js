// Task

const fs = require('fs');

fs.writeFileSync(
    'student.txt',
    'Name: Rahul\nRoll Number: 101\nBranch: CSE\nSemester: 3'
);

console.log('File created successfully');

let data = fs.readFileSync('student.txt', 'utf8');

console.log(data);

fs.appendFileSync(
    'student.txt',
    '\nSubject: Full Stack Development\nMarks: 85\nAttendance: 92%'
);

console.log('File updated');

data = fs.readFileSync('student.txt', 'utf8');

console.log(data);