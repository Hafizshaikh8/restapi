/* const arr1 = [10, 20];
const arr2 = [30, 40, 50];

const arr3 = [60, ...arr1];
console.log(arr3);

const arr4 = [...arr1, ...arr2];
console.log(arr4);

const arr5 = [...arr1, arr2];
console.log(arr5); */

const person = {
    firstName: "abc",
    lastName: "xyz"
};
const person2 = person; // reference is assigned (no copy)

const person1 = {
    ...person,          // create copy of person object
    city: "Mumbai",     // adding new property to person1 object
    lastName: "last"    // modifying existing property of copy of person object i.e. person1
};
person.firstName = "pqr";
console.log(person);
console.log(person1);
console.log(person2);