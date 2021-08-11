const arr = [10, 20, 30, 40];
const [first, second, ...restOfElements] = arr;
console.log(first);
console.log(second);
console.log(restOfElements);


const obj = {
    firstName: "abc",
    lastName: "xyz",
    age: 20
};

const { age, ...person } = obj;
console.log(age);