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


// ******************
// Destructuring Object:
// ******************

// var calculateMonthlyPayment = function(principal, years, rate) {
//   let monthlyRate = 0;
//   if (rate){
//     monthlyRate = rate / 100 / 12;
//   }
//   let monthlyPayment = principal * monthlyRate / (1 - (Math.pow(1/(1 + monthlyRate), years * 12 )));
  
//   return { principal: principal, 
//     years: years, 
//     rate: rate, 
//     monthlyPayment: monthlyPayment, 
//     monthlyRate: monthlyRate };
// };

// const { principal, monthlyPayment } = calculateMonthlyPayment(100, 2, 4);

// console.log('------------------------------------');
// console.log(principal);
// console.log(monthlyPayment);
// console.log('------------------------------------');


// ******************
// Destructuring Array:
// ******************

// const getValuesFromArray = () =>{
//   return ['item1', 'item2', 'item3'];
// };
// const [ a, b, c ] = getValuesFromArray();
// console.log('------------------------------------');
// console.log(a,b,c);
// console.log('------------------------------------');


// ******************
// Class with named methods
// ******************

// class Jedi {
//   constructor(name){
//     this.name= name;
//     this.displayName = this.displayName.bind(this);
//   }
//   displayName(){
//     console.log(this.name);
//   }
// }
// const femaleJedi = new Jedi('luminara unduli');
// femaleJedi.displayName();

// const displayLuminaraName = femaleJedi.displayName;
// displayLuminaraName();

// const displayLuminaraName = femaleJedi.displayName.bind(femaleJedi);
// displayLuminaraName();

// after binding this.displayName in the class constructor
// const displayLuminaraName = femaleJedi.displayName;
// displayLuminaraName();


// ******************
// Literal object with arrow functions methods
// ******************
// var name = 'kenobi (global)';

// var Padawan = {
//   name: 'ahsoka (object)',
//   lastName: 'Tano (object)',
//   displayName: () => {
//     console.log(this);
//     console.log(this.name);
//   },
//   displayLastName: function(){
//     console.log(this);
//     console.log(this.lastName);
//   }
// };
// Padawan.displayName();
// Padawan.displayLastName();


// ******************
// using modules
// ******************
// import * as calculateModule from './calculateModule';

// const monthlyPay = calculateModule.calculateMonthlyPayment(1000, 12, 5);
// const loremIpsum = calculateModule.calculateLoremIpsum();
// console.log('----------------calculateModule--------------------');
// console.log('monthlyPay >>>', monthlyPay);
// console.log('loremIpsum >>>', loremIpsum);
// console.log('------------------------------------');


// ******************
// using Classes with getters
// ******************

// import { Mortgage } from './Mortgage';
// const mortgage = new Mortgage(2000, 4, 12);

// const monthlyPayment = mortgage.monthlyPayment;
// console.log('monthlyPayment >>> ', monthlyPayment);

// const amortization = mortgage.amortization;
// console.log('amortization >>> ', amortization);

// ******************
// using Promises
// ******************