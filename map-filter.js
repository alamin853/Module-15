const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);

// const result = numbers.map(function(element){
//     return element * element;
// })
// console.log(result);

const result2 = numbers.map(element => element * element);
console.log(result2);

const bigger = numbers.filter(element => element > 5);
console.log(bigger);

const isThere = numbers.find(element => element > 6);
console.log(isThere);
