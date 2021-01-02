const students = [
    {id: 21, name: "Tanvir"},
    {id: 31, name: "Alamin"},
    {id: 23, name: "Sabbir"},
    {id: 25, name: "Jahid"}
]
// let name = [];
// for (let i = 0; i < students.length; i++) {
//     const student = students[i];
//     name.push(student.name);
// }
// console.log(name);

const names = students.map(s => s.name);
console.log(names)

const Ids = students.map(s => s.id);
console.log(Ids)

const bigger = students.filter(element => element.id > 24);
console.log(bigger)

const biggerOne = students.find(s => s.id > 25);
console.log(biggerOne)