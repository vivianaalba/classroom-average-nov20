# Classrom Average Calculator
[Instructions] (./instructions.pdf)

Classroom Average Calculator will automatically calculate the average grade on an array of grades.

## Installation

npm init -y
npm install http-server --save-dev
"scripts" : {
    "start" : "http- server -p 3000"
}

### Javascript Files
main.js 
- uses studentData.js , calculateClassroomAverage.js , studentTable.js
- used to execute all functions

studentData.js 
- stores all initial student data

calculateClassRoomAverage.js 
- uses studentData.js 
- used to calculate inital average when running the program

studentTable.js 
- uses studentData.js and calculateClassroomAverage.js 
- used to dynamically render a table from student data provided
- used to recalculate the classroom average when a student average has been changed 