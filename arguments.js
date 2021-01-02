function add(num1, num2){
    console.log([...arguments]);
    return num1 + num2 + arguments[4]; 
    }

const result = add(5, 7, 3, 9, 8);
console.log(result);


