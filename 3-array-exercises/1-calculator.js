function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function sum(arr) {
    return arr.reduce((total, num) => {
        return total + num;
    }, 0);
}

function multiply(x, y) {
    return x * y;
}

function power(x, y) {
    return x**y;
}

function factorial(x) {
    let n = x;
    for (let i = x-1; i > 0; i--) {
        n *= i;
    }
    return n;
}

console.log(add(5, 5));
console.log(subtract(5, 2));
console.log(sum([1, 2, 3, 4, 5]));
console.log(power(2, 2));
console.log(factorial(5));