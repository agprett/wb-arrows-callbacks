/// Array iteration methods

/// forEach()

// Using forEach to output the length of each string.
const fruits = ['apple', 'berry', 'cherry'];


//CODE HERE


// Output:
// 5
// 5
// 6

// Outputting each argument passed to the callback.


//CODE HERE


// Output: apple 0, berry 1, cherry 2

// Using forEach() to replace every other letter in a string with an asterisk.
const phrase = 'Hello, world!';
const phraseArray = [...phrase]; // copy the string to an array

let replacedEveryOther = '';


//CODE HERE


// console.log(replacedEveryOther); // H*l*o* *o*l*!

/// map()

const capitalize = (word) => {
  // Return the word with the first letter capitalized.
  return word[0].toUpperCase() + word.slice(1);
};


//CODE HERE


// console.log(capitalizedFruits);
// [ 'Apple', 'Berry', 'Cherry' ]

// fruits is unchanged:
// console.log(fruits); // [ 'apple', 'berry', 'cherry' ]

const vals = [3, 100, 22];


//CODE HERE


// console.log(doubledVals); // [ 6, 200, 44 ]

// vals is unchanged:
// console.log(vals); // [ 3, 100, 22 ]

const pets = [
  { name: 'Fido', species: 'dog', hasPhd: true },
  { name: 'Socks', species: 'cat', hasPhd: false },
  { name: 'Kiko', species: 'cat', hasPhd: true },
  { name: 'Noodles', species: 'fish', hasPhd: false },
];

// Use map() to output a formal introduction for each pet.


//CODE HERE


// console.log(petIntroductions);

/// filter()

const isEven = (num) => num % 2 === 0;

const nums = [1, 2, 3, 4, 5];


//CODE HERE


// console.log(evens); // [ 2, 4 ]


//CODE HERE


// console.log(fish); // [ { name: 'Noodles', species: 'fish', hasPhd: false } ]

// Count the number of vowels in a string.
const sentence = 'The quick brown fox jumps over the lazy dog.';


//CODE HERE


// console.log(`There are ${vowelsOnly.length} vowels in the sentence.`);
// Output:
// There are 11 vowels in the sentence.

/// reduce()

// Sum all the numbers in an array.
const initialValue = 0;


//CODE HERE


// console.log(sumAllNums); // 15

// Find the total price of Bob's purchases.
const purchases = [
  { customer: 'Barry', price: 9 },
  { customer: 'Bob', price: 50 },
  { customer: 'Barry', price: 27 },
  { customer: 'Barry', price: 128 },
  { customer: 'Bob', price: 22 },
];


//CODE HERE


// console.log(bobsTotal);
