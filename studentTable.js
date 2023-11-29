// Import student data
import data from './studentData.js';
console.log(data);

// Import Classroom Average Calculation to recalculate upon editing a student average
import calculateClassroomAverage from './calculateClassroomAverage.js'

// Create function that makes a table based on student data
function renderStudentTable(table, data) {
    for (let i = 0; i < data.length; i++) {
        // Create a new row element in the table with each student's information
      // average grade should be an input with a preset value of the student's initial average
        const newStudent = document.createElement('tr');
        newStudent.innerHTML = `<td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].address}</td><td><input type="number" id ="inputElement" value="${data[i].averageGrade}"></td>`;

        // Append the new row to table
        table.appendChild(newStudent);
    }
}

// Get the table element by ID
let table = document.getElementById("student-table");


// Function to update a student's grade and recalculate the classroom average
function updateGrade(event) {
  const inputElement = event.target;
  const inputValue = inputElement.value.trim();
  const rowIndex = inputElement.closest('tr').rowIndex;

  // Update the corresponding student's grade in the data array
  data[rowIndex - 1].averageGrade = parseFloat(inputValue);

  for (let i = 0; i < data.length; i++) {
    // array that extracts student ID and grade
    let studentData = [data[i].id, data[i].averageGrade];
  }

  calculateClassroomAverage(data)
}

// export
export {updateGrade, renderStudentTable};
