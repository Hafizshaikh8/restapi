const sum1 = (a, b) => {
    return a + b;
}

const sum2 = (a, b) => a + b;
// console.log(sum2(10, 20));

const square = a => a * a;
// console.log(square(2));

const arr = [1, 2, 3, 4];
const squares = arr.map(a => a * a);
console.log(squares);

const evenNos = arr.filter(a => a % 2 === 0);
console.log(evenNos);
console.log(arr);