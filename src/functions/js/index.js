// ******************
// Now `values.a` is 3, the impure function modifies it.
// Here we modify the attributes of the given object.
// Hence we modify the object which lies outside of the scope of our function: the function is impure.
// ******************

var dogs = { a: 1 };

function impureFunction ( items ) {
  var b = 1;
  items.a = items.a * b + 2;
  return items.a;
}

var impure1 = impureFunction( dogs );
var impure2 = impureFunction( dogs );
var impure3 = impureFunction( dogs );

console.log('impure 1',impure1);
console.log('impure 2',impure2);
console.log('impure 3',impure3);

// ******************
// Pure function: passes value not reference of object
// ******************

var cats = { a: 1 };

function pureFunction ( a ) {
  var b = 1;
  a = a * b + 2;
  return a;
}

var pure1 = pureFunction( cats.a );
var pure2 = pureFunction( cats.a );
var pure3 = pureFunction( cats.a );

console.log('pure 1',pure1);
console.log('pure 2',pure2);
console.log('pure 3',pure3);

const jediFullNames = [
  { name: 'obi wan kenobi', nickname: 'obi', title: 'master' },
  { name: 'yoda', nickname: 'yoda', title: 'master' },
  { name: 'Ahsoka Tano', nickname: 'snips' , title: 'padawan' },
  { name: 'Ezra bridger', nickname: 'kid' , title: 'padawan' },
  { name: 'Anakin skywalker', nickname: 'Ani', title: 'master' }
];

// Currying with es5 fn
// function getNicknamesOf(title) {
//   return (array) => {
//     const items = array.filter(obj => obj.title === title);
//     const nicknames = items.reduce((acc, currentItem, currentIndex, array) => {
//       acc.push(currentItem.nickname);
//       return acc;
//     }, []);
//     return nicknames;
//   };
// }

// Currying arrow fn
const getNicknamesOf = (title) => (array) => {
  const nicknames = array.reduce((acc, currentItem) => {
    if(currentItem.title == title){
      acc.push(currentItem.nickname);
    }
    return acc;
  }, []);
  return nicknames;
};

const nicknamesOfMasters = getNicknamesOf('master');
const masters = nicknamesOfMasters(jediFullNames);
console.log('nicknames of masters:', masters);

const nicknamesOfPadawans = getNicknamesOf('padawan');
const padawans = nicknamesOfPadawans(jediFullNames);
console.log('nicknames of padawans:', padawans);



// arrow function
// Function Delegates
// Expressions Instead of Statements
// Higher Order Functions
//Currying
// Array Manipulation Functions
// [].every(fn)
// [].some(fn)
// [].find(fn)
// [].filter(fn)
// [].map(fn)
// [].reduce(fn(accumulator, currentValue))
// [].sort(fn(a,b)) warning, mutates state!
// [].reverse() warning, mutates state!
// Method Chaining
// Pipelines