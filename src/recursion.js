/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
let factorial = (n) => {
  if (n === 1 || n === 0) { return 1; }
  if (n < 0) { return null; }
  return n * factorial(n - 1);
};


// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
let sum = (array) => {
  if (array.length === 0) { return 0; }
  if (array.length === 1) { return array[0]; }
  return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
let arraySum = (array) => {
  let result = 0;

  if (!Array.isArray(array)) {
    return array;
  }
  array.forEach((currentVal) => {
    result += arraySum(currentVal);
  });
  return result;
};

// 4. Check if a number is even.
// works with negative

let isEven = function (n) {
  if (n === 0) { return true; }
  if (n === 1) { return false; }
  return n > 0 ? isEven(n - 2) : isEven(n + 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45 ==> 9 8 7 6 5 4 3 2 1 0
// sumBelow(7); // 21
let sumBelow = function (n) {
  let result;

  if (n === 0) { return 0; }
  if (n > 0) {
    result = n + sumBelow(n - 1);
    result -= 1;
  } else {
    result = n + sumBelow(n + 1);
    result += 1;
  }
  return result;
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
// range(-3,2); // [-2,-1,0,1]
// range(7,2) // [6,5,4,3]

let range = function (x, y) {
  let result = [];
  let sign;
  if (x > y) {
    sign = -1;
  } else {
    sign = 1;
  }

  if (x + sign === y || x === y) { return []; }
  result = result.concat(x + sign, range(x + sign, y));
  return result;
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// 8^4 = 8^2 * 8^2
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
let exponent = function (base, exp) {
  if (exp === 0) { return 1; }
  if (exp > 0) {
    if (exp % 2 === 0) { // if even positive exp
      return (exponent(base, exp / 2)) ** 2;
    }
    return base * exponent(base, exp - 1); // if odd positive exp
  }
  return 1 / exponent(base, -1 * exp); // if negative exp
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
let powerOfTwo = function (n) {
  if (n === 1) { return true; }
  if (n % 1 !== 0 || n === 0) { return false; }
  return powerOfTwo(n / 2);
};

// 9. Write a function that reverses a string.
let reverse = function (string) {
  if (string.length === 0) { return ''; }
  return `${string[string.length - 1]}${reverse(string.slice(0, string.length - 1))}`;
};

// 10. Write a function that determines if a string is a palindrome.
let palindrome = function (string) {
  const newStr = string.replace(/[^\w]/gi, '').toLowerCase();
  const firstLetter = newStr[0];
  const lastLetter = newStr[newStr.length - 1];

  if (string.length === 0) { return true; }
  return firstLetter === lastLetter ? palindrome(string.slice(1, string.length - 1)) : false;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
/*
12 % 5 // 2 yes
-1 % 2 // -1 yes
1 % -2 // 1  yes
NaN % 2 // NaN yes
1 % 2 // 1 yes
2 % 3 // 2 yes
-4 % 2 // -0 
5.5 % 2 // 1.5
*/


let modulo = function (x, y) {
  if (x === 0 && y === 0) { return NaN; }
  if (x < 0) {
    return -modulo(-x, y);
  }
  if (y < 0) {
    return modulo(x, -y);
  }
  if (x < y) {
    return x;
  }

  return modulo(x - y, y);
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
let multiply = function (x, y) {
  if (x < 0 && y < 0) {
    return multiply(-x, -y);
  }
  if (x < 0) { return -multiply(-x, y); }
  if (y < 0) { return -multiply(x, -y); }
  if (y === 0) { return 0; }
  return x + multiply(x, y - 1);
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
/*
expect(divide(2, 1)).to.equal(~~(2 / 1));
expect(divide(17, 5)).to.equal(~~(17 / 5));
expect(divide(78, 453)).to.equal(~~(78 / 453));
expect(divide(-79, 82)).to.equal(~~(-79 / 82));
expect(divide(-275, -582)).to.equal(~~(-275 / -582));
expect(divide(0, 32)).to.equal(~~(0 / 32));

*/
let divide = function (x, y) {
  if (x < 0 && y < 0) {
    return divide(-x, -y);
  }
  if (x < 0) { return -divide(-x, y); }
  if (y < 0) { return -divide(x, -y); }
  if (y === 0) { return NaN; }
  if (y === 1) { return x; }
  if (x === 0) { return 0; }

  if (x < y) { return 0; }

  return 1 + divide(x - y, y);
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
let gcd = function (x, y) {
  if (x < 0 || y < 0) { return null; }
  if (y === 0) { return x; }
  return gcd(y, x % y);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
let compareStr = function (str1, str2) {
  if (str1.length === 0 && str2.length === 0) { return true; }
  return str1[0] === str2[0] ? compareStr(str1.slice(1), str2.slice(1)) : false;
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
let createArray = function (str) {
  let result = [];
  if (str.length === 0) { return []; }
  result = result.concat(str[0], createArray(str.slice(1)));
  return result;
};

// 17. Reverse the order of an array
let reverseArr = function (array) {
  let result = [];
  if (array.length === 0) { return []; }
  const lastIndex = array.length - 1;
  const lastChar = array[lastIndex];
  result = result.concat(lastChar, reverseArr(array.slice(0, lastIndex)));
  return result;
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
let buildList = function (value, length) {
  const result = [];
  return length === 0 ? [] : result.concat([value], buildList(value, length - 1));
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
let fizzBuzz = function (n) {
  const result = [];
  let word = '';
  if (n === 0) { return []; }
  if (n % 3 === 0) { word += 'Fizz'; }
  if (n % 5 === 0) { word += 'Buzz'; }
  if (word.length === 0) { word += n; }
  return result.concat(fizzBuzz(n - 1), word);
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
let countOccurrence = function (array, value) {
  let count = 0;
  if (array.length === 0) { return 0; }
  if (array[0] === value) { count += 1; }
  return count + countOccurrence(array.slice(1), value);
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
let rMap = function (array, callback) {
  const result = [];
  return array.length === 0 ? [] : result.concat(callback(array[0]), rMap(array.slice(1), callback));
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
let countKeysInObj = function (obj, key) {
  let count = 0;

  if (typeof obj === 'object') {
    Object.keys(obj).forEach((currentKey) => {
      const currentVal = obj[currentKey];
      if (currentKey === key) {
        count += 1;
      }
      if (typeof currentVal === 'object') {
        count += countKeysInObj(currentVal, key);
      }
    });
  }
  return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
let countValuesInObj = function (obj, value) {
  let count = 0;

  if (typeof obj === 'object') {
    Object.keys(obj).forEach((currentKey) => {
      const currentVal = obj[currentKey];
      if (currentVal === value) { count += 1; }
      if (typeof currentVal === 'object') {
        count += countValuesInObj(currentVal, value);
      }
    });
  }
  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
// input = { e: { x: 'y' }, t: { r: { e: 'r' }, p: { y: 'r' } }, y: 'e' };
let replaceKeysInObj = function (obj, oldKey, newKey) {
  const result = obj;

  if (typeof obj === 'object') {
    let temp;
    Object.keys(result).forEach((currentKey) => {
      const currentVal = result[currentKey];
      if (currentKey === oldKey) {
        temp = currentVal;
        delete result[currentKey];
        result[newKey] = temp;
      }
      if (typeof currentVal === 'object') {
        replaceKeysInObj(currentVal, oldKey, newKey);
      }
    });
  }
  return result;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
let fibonacci = function (n) {
  let result = [];
  if (n <= 0) { return null; }
  if (n === 1) { return [0, 1]; }
  result = result.concat(fibonacci(n - 1));

  const lastNum = parseInt(result.slice(-1), 10);
  const lastLastNum = parseInt(result.slice(-2, -1), 10);

  result.push(lastNum + lastLastNum);
  return result;
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
let nthFibo = function (n) {
  if (n < 0) { return null; }
  if (n === 0) { return 0; }
  if (n === 1) { return 1; }
  return nthFibo(n - 1) + nthFibo(n - 2);
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
let capitalizeWords = function (array) {
  const result = [];
  if (array.length === 0) { return []; }
  return result.concat(array[0].toUpperCase(), capitalizeWords(array.slice(1)));
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
let capitalizeFirst = function (array) {
  const result = [];
  if (array.length === 0) { return []; }
  const currentStr = array[0];
  const capWord = currentStr[0].toUpperCase() + currentStr.slice(1);
  return result.concat(capWord, capitalizeFirst(array.slice(1)));
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
let nestedEvenSum = function (obj) {
  let count = 0;

  if (typeof obj === 'object') {
    Object.keys(obj).forEach((currentKey) => {
      const currentVal = obj[currentKey];
      if (currentVal % 2 === 0) { count += currentVal; }

      if (typeof currentVal === 'object') {
        count += nestedEvenSum(currentVal);
      }
    });
  }
  return count;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
let flatten = function (array) {
  let result = [];

  if (!Array.isArray(array)) { return [array]; }
  array.forEach((element) => {
    result = result.concat(flatten(element));
  });

  return result;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
let letterTally = function (str, obj = {}) {
  const current = str[0];
  if (str.length === 0) { return obj; }
  obj[current] = (obj[current] || 0) + 1;

  return letterTally(str.slice(1), obj);
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
let compress = function (list) {
  let result = [];
  if (list.length === 0) { return []; }
  result = result.concat(compress(list.slice(1)));

  if (list[0] !== result[0]) { result.unshift(list[0]); }
  return result;
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
let augmentElements = function (array, aug) {
  let result = [];
  const slicedArr = array.slice(1);

  if (array.length === 0) { return []; }
  if (array[0].length === 0) {
    return result.concat([[aug]], augmentElements(slicedArr, aug));
  }
  return result.concat([array[0].concat(aug)], augmentElements(slicedArr, aug));
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
let minimizeZeroes = function (array) {
  let result = [];
  if (array.length === 0) { return []; }
  result = result.concat(minimizeZeroes(array.slice(1)));
  if (array[0] !== 0 || (array[0] === 0 && result[0] !== 0)) {
    result.unshift(array[0]);
  }
  return result;
};


// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
let alternateSign = function (array) {
  let result = [];
  const currentNum = Math.abs(parseInt(array, 10));
  let sign;

  if (array.length === 0) { return []; }
  result = result.concat(alternateSign(array.slice(1)));
  if (result.length % 2 === 0) { // even is negative
    sign = -1;
  } else {
    sign = 1;
  }
  result.unshift(sign * currentNum);
  return result;
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
let numToText = function (str) {
  const obj = { 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine' };
  const result = '';
  const isNumber = /\d/.test(str[0]);

  let currentChar = str[0];
  if (isNumber) {
    currentChar = obj[currentChar];
  }
  if (str.length === 0) { return ''; }
  return result + currentChar + numToText(str.slice(1));
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
let tagCount = function (tag, node) {
  let i;
  let count = 0;
  tag = tag.toUpperCase();
  node = node || document.documentElement;

  // base case
  if (node.children.length === 0) { return node.tagName === tag ? 1 : 0; }
  if (node.tagName === tag) { count += 1; }
  for (i = 0; i < node.children.length; i += 1) {
    count += tagCount(tag, node.children[i]);
  }
  return count;
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
let binarySearch = function (array, target, min, max) {
  if (min === undefined) { min = 0; }
  if (max === undefined) { max = array.length - 1; }
  const guess = Math.floor((min + max) / 2);

  // base case:
  if (max <= min && array[guess] !== target) { return null; }
  // if guess is right, return it
  if (array[guess] === target) { return guess; }
  // if guess is high
  if (array[guess] > target) { return binarySearch(array, target, min, guess); }
  // if guess is low
  if (array[guess] < target) { return binarySearch(array, target, guess + 1, max); }
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
let mergeSort = function (array) {

  // base case: 2 elements in array
  if (array.length <= 1) { return array; }
  const midPoint = Math.floor(array.length / 2);
  const leftArr = array.slice(0, midPoint);
  const rightArr = array.slice(midPoint);

  return merge(mergeSort(leftArr), mergeSort(rightArr));

};

let merge = function (arr1, arr2) {
  let leftIndex = 0;
  let rightIndex = 0;
  let result = [];

  while (leftIndex < arr1.length && rightIndex < arr2.length) {
    if (arr1[leftIndex] < arr2[rightIndex]) {
      result.push(arr1[leftIndex]);
      leftIndex += 1;
    } else {
      result.push(arr2[rightIndex]);
      rightIndex += 1;
    }
  }
  // need to concat in case an array was longer than the other
  return result.concat(arr1.slice(leftIndex), arr2.slice(rightIndex));
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
let clone = function (input) {
  let result;
  let i;

  if (Array.isArray(input)) {
    result = [];
    if (input.length === 0) { return []; }
    for (i = 0; i < input.length; i += 1) {
      if (typeof input[i] === 'object') {
        result.push(clone(input[i]));
      } else {
        result.push(input[i]);
      }
    }
  } else {
    result = {};
    if (input === null) { return {}; }
    Object.keys(input).forEach((currentKey) => {
      if (typeof input[currentKey] === 'object') {
        result[currentKey] = clone(input[currentKey]);
      } else {
        result[currentKey] = input[currentKey];
      }
    });
  }
  return result;
};
