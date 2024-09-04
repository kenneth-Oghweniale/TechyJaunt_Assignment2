// Array of student objects
const students = [
    { name: 'John', age: 15, grade: 'A' },
    { name: 'Jane', age: 16, grade: 'B' },
    { name: 'Jack', age: 14, grade: 'A' },
    { name: 'Jill', age: 17, grade: 'C' },
    { name: 'James', age: 15, grade: 'B' }
];

// Function to filter students by grade
function filterByGrade(studentArray, grade) {
    return studentArray.filter(student => student.grade === grade);
}

// Function to calculate the average age of students
function averageAge(studentArray) {
    if (studentArray.length === 0) return 0;

    const totalAge = studentArray.reduce((sum, student) => sum + student.age, 0);
    return totalAge / studentArray.length;
}

// Test cases
console.log(filterByGrade(students, 'A'));

console.log(filterByGrade(students, 'B'));

console.log(averageAge(students));

console.log(averageAge(filterByGrade(students, 'A')));
