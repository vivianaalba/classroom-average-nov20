import data from './studentData.js';
import calculateClassroomAverage from './calculateClassroomAverage.js'
import { updateGrade, renderStudentTable } from './studentTable.js';

// Call the function with the table element and data
renderStudentTable(table, data);

// Calculate classroom average
calculateClassroomAverage(data);

// implement event handler to recalculate class average when a student average has changed
table.addEventListener("change", updateGrade)