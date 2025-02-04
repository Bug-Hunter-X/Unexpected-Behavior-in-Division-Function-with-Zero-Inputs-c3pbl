function foo(a, b) {
  if (b === 0) {
    return a === 0 ? 0 : Infinity; // Handle division by zero
  } else if (a === 0) {
    return 0; // Handle zero numerator
  }
  return a / b;
}

console.log(foo(10, 2)); // Output: 5
console.log(foo(0, 2)); // Output: 0
console.log(foo(10, 0)); // Output: Infinity
console.log(foo(0,0)); // Output: 0