// ******************
// FEATURE: var vs let
// var: function-scoped
// let are block-scoped: they only exist in the block they are defined in.
// ******************

// ******************
// using VAR
// ******************

// var calculateMonthlyPayment = function(principal, years, rate) {
//   if (rate){
//     var monthlyRate = rate / 100 / 12;
//   }
//   var monthlyPayment = principal * monthlyRate / (1 - (Math.pow(1/(1 + monthlyRate), years * 12 )));
  
//   return monthlyPayment;
// };

// const monthlyPay = calculateMonthlyPayment(20000, 12, 5);
// console.log('------------------------------------');
// console.log('monthlyPay >>>', monthlyPay);
// console.log('------------------------------------');


// ******************
// using LET
// ******************


// var calculateMonthlyPayment = function(principal, years, rate) {
//   let monthlyRate = 0;
//   if (rate){
//     monthlyRate = rate / 100 / 12;
//   }
//   let monthlyPayment = principal * monthlyRate / (1 - (Math.pow(1/(1 + monthlyRate), years * 12 )));
  
//   return monthlyPayment;
// };

// const monthlyPay = calculateMonthlyPayment(1000, 12, 5);
// console.log('------------------------------------');
// console.log('monthlyPay >>>', monthlyPay);
// console.log('------------------------------------');
