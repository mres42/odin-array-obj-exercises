let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

//my solution
function getAverageAge(arr) {
    const n = arr.length;
    let total = 0;
    for (user of arr) {
        total += user.age;
    }
    return total / n;
}

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28