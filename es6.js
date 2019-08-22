////////// LET & CONST ////////////////////

const leia = 'Leia';
console.log(leia);
// Leia

leia = 'Pricess Leia';
console.log(leia);
// TypeError: Assignment to constant variable

let luke = 'Luke';
console.log(luke);
// Leia

luke = 'Luke Skywalker';
console.log(luke);
// Luke Skywalker

const han;
han = 'Han Solo';
console.log(han);
// Uncaught SyntaxError: Missing initializer in const declaration

let han;
han = 'Han Solo';
console.log(han);
// Han Solo

////////// SCOPE ////////////////////

// var - functional scope
function varTest() {
  var x = 1;
  console.log(x);  // 1

  if (true) {
    x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

// let - block scope
function letTest() {
  let x = 3;
  if (true) {
    let x = 4;  // different variable
    console.log(x);  // 4
  }
  console.log(x);  // 3
}

varTest();

letTest();

// ES6 template literals
const string1 = `something`
console.log(string1);
// something 

// ES5 multi-line strings
var string2 =
  'first line\n \
  second line'
console.log(string2);
// first line
//   second line

const string3 = 'first line\n' + 'second line'
console.log(string3);
// first line
// second line

// ES6 multi-line strings with template literals
const string4 = `Hey
this

string
is awesome!`
console.log(string4);
// Hey
// this

// string
// is awesome!

// ES6 string interpolation
const someVariable = 'test'
const string5 = `something ${someVariable }`
console.log(string5);
// something test

// Spread Operator
let starwars = ['Episode 4', 'Episode 5', 'Episode 6'];

console.log(starwars);
// [ 'Episode 4', 'Episode 5', 'Episode 6' ]
console.log(...starwars);
// Episode 4 Episode 5 Episode 6

let parts = ['shoulders', 'knees']; 
let lyrics = ['head', ...parts, 'and', 'toes']; 
console.log(lyrics);
// ["head", "shoulders", "knees", "and", "toes"]
console.log(...lyrics);
// head shoulders knees and toes

// Destructuring
const character = {
    fname: 'luke',
    lname: 'skywalker'
};

// Assign default value of 25 to age if undefined
const { fname, lname, age = 45 } = character;

// Here I am using ES6 template literals
console.log(`I am ${fname} ${lname} and I am ${age} years old.`);
// I am luke skywalker and I am 45 years old.


// BigInt
const max = Number.MAX_SAFE_INTEGER;

console.log(max);
// 9007199254740991

console.log(max + 1);
// 9007199254740992

console.log(max + 2);
// 9007199254740992

const max2 = BigInt(Number.MAX_SAFE_INTEGER) + 2n;

console.log(max2);
// 9007199254740993n


