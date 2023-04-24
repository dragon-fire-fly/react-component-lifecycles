// MAPPING

// const students = [
//     {
//         id: 1,
//         name: "Mark",
//         profession: "Developer",
//         skill: "Javascript"
//     },
//     {
//         id: 2,
//         name: "Ariel",
//         profession: "Developer",
//         skill: "HTML"
//     },
//     {
//         id: 3,
//         name: "Jason",
//         profession: "Developer",
//         skill: "CSS"
//     },
// ];

// const studentsWithIds = students.map(student => [student.name, student.id])
// const studentsWithIds2 = students.map(student => (student.name, student.id))
// console.log(studentsWithIds)
// console.log(studentsWithIds2)


// FILTERING

// Simple Filtering
// const people = [
//     {
//         name: 'Michael',
//         age: 23,
//     },
//     {
//         name: 'Lianna',
//         age: 16,
//     },
//     {
//         name: 'Paul',
//         age: 18,
//     },
// ];

// const oldEnough = people.filter(person => person.age >= 21)
// console.log(oldEnough)

// const paul = people.filter(person => person.name === "Paul")
// console.log(paul[0])


  // Complex Filtering
// const students = [
//     {
//         id: 1,
//         name: 'Mark',
//         profession: 'Developer',
//         skills: [
//         { name: 'javascript', yrsExperience: 1 },
//         { name: 'html', yrsExperience: 5 },
//         { name: 'css', yrsExperience: 3 },
//         ]
//     },
//     {
//         id: 2,
//         name: 'Ariel',
//         profession: 'Developer',
//         skills: [
//         { name: 'javascript', yrsExperience: 0 },
//         { name: 'html', yrsExperience: 4 },
//         { name: 'css', yrsExperience: 2 },
//         ]
//     },
//     {
//         id: 3,
//         name: 'Jason',
//         profession: 'Designer',
//         skills: [
//         { name: 'javascript', yrsExperience: 1 },
//         { name: 'html', yrsExperience: 1 },
//         { name: 'css', yrsExperience: 5 },
//         ]
//     },
// ];

// const candidates = students.filter(student => {
//     let strongSkills = student.skills.filter(skill => skill.yrsExperience >=5);
//     return strongSkills.length > 0;
// })

// console.log(candidates)

// const hasStrongSkills = student => {
//     let strongSkills = student.skills.filter(skill => skill.yrsExperience >=5);
//     return strongSkills.length > 0;
// };

// const candidates = students.filter(hasStrongSkills);

// console.log(candidates)


// const has5YearsExp = skill => skill.yrsExperience >= 5;
// const hasStrongSkills = student => student.skills.filter(has5YearsExp).length > 0;
// const candidates = students.filter(hasStrongSkills);
// const candidateNames = candidates.map(candidate => candidate.name)

// console.log(candidateNames)

// REDUCE

// Summing an array of numbers:

// const nums = [0, 1, 2, 3, 4];
// let sum = nums.reduce((acc, curr) => acc + curr)
// console.log(sum)

// // breakdown of what's happening:
// let sum2 = nums.reduce((acc, curr) => {
//     console.log(
//         "accumulator", acc,
//         "current value", curr,
//         "total", acc + curr
//     );
//     return acc + curr;
// }, 10)
// console.log(sum2)

// let sum3 = nums.reduce((acc, curr) => acc + curr, 10)
// console.log(sum3)

const teamMembers = [
    {
        name: 'Andrew',
        profession: 'Developer',
        yrsExperience: 5
    },
    {
        name: 'Ariel',
        profession: 'Developer',
        yrsExperience: 7
    },
    {
        name: 'Michael',
        profession: 'Designer',
        yrsExperience: 1
    },
    {
        name: 'Kelly',
        profession: 'Designer',
        yrsExperience: 3
    }
];

// Totally a specific object property:

let totalExp = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0)
console.log(totalExp)

let expByProfession = teamMembers.reduce((acc, curr) => {
    let key = curr.profession;
    if (!acc[key]) {
        acc[key] = curr.yrsExperience;
    }
    else {
        acc[key] += curr.yrsExperience
    }
    return acc;
}, {});

console.log(expByProfession)


let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 73, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, english: 88, maths: 97, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

const biggest = students.reduce((acc, curr) => {
    acc = acc.max > curr.results.english ? acc: {name: curr.name, max: curr.results.english};
    return acc

}, {name: "", max: 0})
console.log(biggest)

// or with destructuring:
const biggest2 = students.reduce(({max, name}, {name:n, results:{english}}) => {
    if(max < english) {
        acc = {name:n, max: english};
    }
    return acc;
    }, {name: '', max: 0});
    
console.log(biggest2);
