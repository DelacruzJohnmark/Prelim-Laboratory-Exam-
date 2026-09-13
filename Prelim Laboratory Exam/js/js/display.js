import {
    calculateFinalGrade,
    getAcademicStatus,
    calculateClassAverage,
    countPassingStudents,
    getTopStudent,
    getPerformanceRemark
} from "./gradeUtils.js";


// Display student records
export function displayStudents(students) {

    const studentList = document.getElementById("studentList");
    const messageArea = document.getElementById("messageArea");

    studentList.innerHTML = "";
    messageArea.innerHTML = "";

    if (students.length === 0) {

        displayMessage("No students found.");

        return;
    }


    students.forEach(student => {

        // Object destructuring requirement
        const {
            id,
            name,
            block,
            quiz,
            lab,
            exam
        } = student;

        const finalGrade = calculateFinalGrade(student);
        const academicStatus = getAcademicStatus(finalGrade);
        const performanceRemark = getPerformanceRemark(finalGrade);


        let statusClass = "";

        if (academicStatus === "Excellent") {
            statusClass = "status-excellent";
        } else if (academicStatus === "Passed") {
            statusClass = "status-passed";
        } else if (academicStatus === "Needs Improvement") {
            statusClass = "status-needs";
        } else {
            statusClass = "status-failed";
        }


        const article = document.createElement("article");

        article.className = "student-card";

        article.innerHTML = `
            <div class="student-header">

                <div>
                    <h2>${name}</h2>
                    <p class="student-block">
                        Student ID: ${id} | Block: ${block}
                    </p>
                </div>

                <span class="status ${statusClass}">
                    ${academicStatus}
                </span>

            </div>


            <div class="scores">

                <div class="score-box">
                    <small>Quiz</small>
                    <strong>${quiz}</strong>
                </div>

                <div class="score-box">
                    <small>Laboratory</small>
                    <strong>${lab}</strong>
                </div>

                <div class="score-box">
                    <small>Prelim Exam</small>
                    <strong>${exam}</strong>
                </div>

            </div>


            <div class="final-grade">

                <small>Computed Final Grade</small>

                <strong>
                    ${finalGrade.toFixed(2)}
                </strong>

            </div>


            <div class="remark">
                <strong>Performance Remark:</strong>
                ${performanceRemark}
            </div>
        `;


        studentList.appendChild(article);

    });
}


// Display summary
export function displaySummary(students) {

    const classAverageElement =
        document.getElementById("classAverage");

    const passingCountElement =
        document.getElementById("passingCount");

    const displayedCountElement =
        document.getElementById("displayedCount");

    const topStudentElement =
        document.getElementById("topStudent");


    const classAverage =
        calculateClassAverage(students);

    const passingCount =
        countPassingStudents(students);

    const topStudent =
        getTopStudent(students);


    classAverageElement.textContent =
        classAverage.toFixed(2);

    passingCountElement.textContent =
        passingCount;

    displayedCountElement.textContent =
        students.length;


    if (topStudent) {

        const topGrade =
            calculateFinalGrade(topStudent);

        topStudentElement.textContent =
            `${topStudent.name} (${topGrade.toFixed(2)})`;

    } else {

        topStudentElement.textContent = "None";
    }
}


// Display message
export function displayMessage(message) {

    const messageArea =
        document.getElementById("messageArea");

    messageArea.innerHTML = `
        <div class="no-results">
            ${message}
        </div>
    `;
}