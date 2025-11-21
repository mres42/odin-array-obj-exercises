function fibonacci(n) {
    let fib = [1, 1];
    for (let i = fib.length; i < n; i++) {
        fib.push(fib[i-1] + fib[i-2]);
    }
    return fib[fib.length - 1];
}

console.log(fibonacci(4));
console.log(fibonacci(6));