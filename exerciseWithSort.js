const list1 = [
  {
    name: "adam",
    scores: [97, 87, 65],
    dob: "05-09-1999"
  },
  {
    name: "ceclia",
    scores: [77, 85, 99, 56],
    dob: "09-09-1992"
  },
  {
    name: "ben",
    scores: [85, 91],
    dob: "12-09-1987"
  },
];
const list2 = [
  {
    name: "barry",
    scores: [94, 56, 67],
    dob: "09-20-1992"
  },
  {
    name: "jennifer",
    scores: [93, 92, 88],
    dob: "11-08-1996"
  },
  {
    name: "carmen",
    scores: [60, 57, 86, 89],
    dob: "01-15-2001"
  },
];

// DO NOT MODIFY LIST 1 OR LIST 2
let students = list1.concat(list2);

//Sorded by name
let sortedByName = students.sort((student1, student2) => {
  if (student1.name < student2.name) {
    return -1
  } else if (student2.name < student1.name) {
    return 1;
  } else {
    return 0;
  }
});

// sort oldest to youngest
let sortedByDOB = students.sort((student1, student2) => {
  let dobStudent1 = new Date(student1.dob);
  let dobStudent2 = new Date(student2.dob);

  if (dobStudent1 < dobStudent2) {
    return -1
  } else if (student2.name < student1.name) {
    return 1;
  } else {
    return 0;
  }
});


// find the student with the highest average score
/* should look like this:
{
  name:
  dob:
  scores:
  averageScore:
}
*/

let studentWithTheHighestAverage = {averageScore: -Infinity};
let lenStudents = students.length;
let sum = 0;

// add averageScore as another property for each student object
for (let i = 0; i < lenStudents; i++) {
  students[i].averageScore = students[i].scores.reduce((acc, num) => {
    return acc + num;
  }, 0) / students[i].scores.length;

  sum += students[i].averageScore;
  
  if (students[i].averageScore > studentWithTheHighestAverage.averageScore) {
    studentWithTheHighestAverage = students[i];
  } 
}

// find the average test score for all of the students combined
// use Array reduce()

let avgOfAllStudents = sum / lenStudents;

console.log('list1', list1);
console.log('list2', list2);
console.log('byName', sortedByName);
console.log('byDOB', sortedByDOB);
console.log(studentWithTheHighestAverage);
console.log(avgOfAllStudents);
