import { students } from "./students.js";

import {
    searchStudents,
    filterStudentsByBlock,
    filterStudentsByStatus
} from "./gradeUtils.js";

import {
    displayStudents,
    displaySummary
} from "./display.js";


// Select HTML controls using required IDs
const searchInput =
    document.getElementById("searchInput");

const blockFilter =
    document.getElementById("blockFilter");

const statusFilter =
    document.getElementById("statusFilter");

const applyBtn =
    document.getElementById("applyBtn");

const resetBtn =
    document.getElementById("resetBtn");


// Process and display filtered students
function applyFilters() {

    const query =
        searchInput.value;

    const selectedBlock =
        blockFilter.value;

    const selectedStatus =
        statusFilter.value;


    // Start with all students
    let filteredStudents = students;


    // Search by name
    filteredStudents =
        searchStudents(
            filteredStudents,
            query
        );


    // Filter by block
    filteredStudents =
        filterStudentsByBlock(
            filteredStudents,
            selectedBlock
        );


    // Filter by academic status
    filteredStudents =
        filterStudentsByStatus(
            filteredStudents,
            selectedStatus
        );


    // Display results
    displayStudents(filteredStudents);

    displaySummary(filteredStudents);
}


// Apply button event
applyBtn.addEventListener("click", () => {

    applyFilters();

});


// Search input event
searchInput.addEventListener("input", () => {

    applyFilters();

});


// Block filter event
blockFilter.addEventListener("change", () => {

    applyFilters();

});


// Status filter event
statusFilter.addEventListener("change", () => {

    applyFilters();

});


// Reset button event
resetBtn.addEventListener("click", () => {

    // Clear search
    searchInput.value = "";

    // Restore filters
    blockFilter.value = "All";
    statusFilter.value = "All";


    // Display all students
    displayStudents(students);

    displaySummary(students);

});


// Initial page load
displayStudents(students);

displaySummary(students);