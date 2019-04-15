// ****************************************
// Array.prototype.reduce()
// Function composition enabling piping
// ****************************************

// Building-blocks to use for composition
// 3 functions:
const double = (x) => x * 2;
const triple = (x) => x * 3;
const quadruple = (x) => x * 4;

// Function composition enabling pipe functionality
const pipe = (...functions) => (input) => {
  console.log(typeof []);
  return functions.reduce((acc, currentFn) => currentFn(acc), input);
};

// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);

// // usage
const result = multiply6(6); // 36
// const result2 = multiply9(9); // 81
// const result3 = multiply16(16); // 256
// const result4 = multiply24(2); // 240
console.log(result);

// console.log(result, result2, result3, result4);

