// Basic math functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Increment and decrement
function increment(n) {
    return n + 1;
}

function decrement(n) {
    return n - 1;
}

// Parsing integers and preserving decimals
function makeInt(n) {
    return parseInt(n, 10); // Base 10 is specified to ensure it parses as a decimal integer
}

function preserveDecimal(n) {
    return parseFloat(n); // Parses the string and preserves any decimals
}

// Example usage
console.log(add(5, 3)); // 8
console.log(subtract(10, 5)); // 5
console.log(multiply(3, 4)); // 12
console.log(divide(10, 2)); // 5
console.log(increment(5)); // 6
console.log(decrement(5)); // 4
console.log(makeInt('0x10')); // 16 in base 10, but as per requirement, it's treated as a base 10 integer
console.log(makeInt('10.5')); // 10
console.log(preserveDecimal('10.5')); // 10.5
console.log(preserveDecimal('abc')); // NaN, as 'abc' cannot be parsed as a number
