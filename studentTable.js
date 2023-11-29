// Import student data
import data from './studentData.js';
console.log(data);

// Create function that makes a table based on student data
function renderStudentTable(table, data) {
    for (let i = 0; i < data.length; i++) {
        // Create a new row in the specified table
        const newStudent = document.createElement('tr');
        newStudent.innerHTML = `<td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].address}</td><td>${data[i].averageGrade}</td>`;
        
        // Append the new row to the table
        table.appendChild(newStudent);
    }
}

// Get the table element by ID
let table = document.getElementById("student-table");

// Call the function with the table element and data
renderStudentTable(table, data);

// use DOM manipulation to create an input field for the average
// Implement an onchange event handler that calls a function named updateGrade when 
// a student's average grade is modified. This function will update the student's grade
// and recalculate the classroom average.

function updateGrade(inputElement) {
    const inputValue = inputElement.value;
    console.log(inputValue);
}