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
