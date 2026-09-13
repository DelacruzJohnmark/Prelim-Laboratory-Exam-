export function calculateFinalGrade(student) {

    const { quiz, lab, exam } = student;

    const finalGrade =
        (quiz * 0.25) +
        (lab * 0.35) +
        (exam * 0.40);

    return finalGrade;
}


// Determine academic status
export function getAcademicStatus(grade) {

    if (grade >= 90) {
        return "Excellent";
    } else if (grade >= 75) {
        return "Passed";
    } else if (grade >= 70) {
        return "Needs Improvement";
    } else {
        return "Failed";
    }
}


// Search students by name
export function searchStudents(students, query) {

    const searchText = query.trim().toLowerCase();

    if (searchText === "") {
        return students;
    }

    return students.filter(student =>
        student.name.toLowerCase().includes(searchText)
    );
}


// Filter students by block
export function filterStudentsByBlock(students, block) {

    if (block === "All") {
        return students;
    }

    return students.filter(student =>
        student.block === block
    );
}


// Filter students by academic status
export function filterStudentsByStatus(students, status) {

    if (status === "All") {
        return students;
    }

    return students.filter(student => {

        const finalGrade = calculateFinalGrade(student);
        const academicStatus = getAcademicStatus(finalGrade);

        return academicStatus === status;
    });
}


// Calculate class average
export function calculateClassAverage(students) {

    if (students.length === 0) {
        return 0;
    }

    const total = students.reduce(
        (sum, student) => sum + calculateFinalGrade(student),
        0
    );

    return total / students.length;
}


// Count passing students
export function countPassingStudents(students) {

    return students.filter(student => {

        const finalGrade = calculateFinalGrade(student);

        return finalGrade >= 75;

    }).length;
}


// Get top student
export function getTopStudent(students) {

    if (students.length === 0) {
        return null;
    }

    return students.reduce((topStudent, currentStudent) => {

        const topGrade = calculateFinalGrade(topStudent);
        const currentGrade = calculateFinalGrade(currentStudent);

        return currentGrade > topGrade
            ? currentStudent
            : topStudent;

    });
}


// Required switch(true) structure
export function getPerformanceRemark(grade) {

    switch (true) {

        case grade >= 90:
            return "Outstanding";

        case grade >= 85:
            return "Very Good";

        case grade >= 80:
            return "Good";

        case grade >= 75:
            return "Satisfactory";

        default:
            return "Unsatisfactory";
    }
}