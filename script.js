/* 
- Do the below programs in anonymous function & IIFE
[*] Print odd numbers in an array
[*] Convert all the strings to title caps in a string array
[*] Sum of all numbers in an array
[*] Return all the prime numbers in an array
[*] Return all the palindromes in an array
[*] Return median of array
[*] Remove duplicates from an array
[*] Rotate an array by k times

- https://medium.com/@reach2arunprakash/guvi-zen-class-javascript-warm-up-programming-problems-15973c74b87f

- Do the below programs in arrow functions
[*] Print odd numbers in an array
[*] Convert all the strings to title caps in a string array
[*] Sum of all numbers in an array
[*] Return all the prime numbers in an array
[*] Return all the palindromes in an array 
*/

let anon, arrow;

////////////////////////////////////////////////
// Print odd numbers in an array
////////////////////////////////////////////////

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Anonymous function
anon = function (arr) {
  return arr.filter((i) => i % 2 !== 0);
};
console.log(anon(arr));

// IIFE
(function (arr) {
  console.log(arr.filter((i) => i % 2 !== 0));
})(arr);

// Arrow function
arrow = (arr) => {
  return arr.filter((i) => i % 2 !== 0);
};
console.log(arrow(arr));

////////////////////////////////////////////////
// Convert all the strings to title caps in a string array
////////////////////////////////////////////////

arr = ["one", "two", "three", "four", "five"];

// Anonymous function
anon = function (arr) {
  return arr.map((s) => s[0].toUpperCase() + s.slice(1));
};
console.log(anon(arr));

// IIFE
(function (arr) {
  console.log(arr.map((s) => s[0].toUpperCase() + s.slice(1)));
})(arr);

// Arrow function
arrow = (arr) => {
  return arr.map((s) => s[0].toUpperCase() + s.slice(1));
};
console.log(arrow(arr));

////////////////////////////////////////////////
// Sum of all numbers in an array
////////////////////////////////////////////////

arr = [1, 2, 3, 4, 5, 6];

// Anonymous function
anon = function (arr) {
  return arr.reduce((a, b) => a + b, 0);
};
console.log(anon(arr));

// IIFE
(function (arr) {
  console.log(arr.reduce((a, b) => a + b, 0));
})(arr);

// Arrow function
arrow = (arr) => {
  return arr.reduce((a, b) => a + b, 0);
};
console.log(arrow(arr));

////////////////////////////////////////////////
// Return all the prime numbers in an array
////////////////////////////////////////////////

arr = [1, -1, -3, 2, 3, 4, 5, 6, 7, 8, 9];

// check if num is prime - returns true or false
const isPrime = (num) => {
  if (num <= 1) return false;
  let prime = true;
  for (let i = 2; i < num / 2 + 1; i++) {
    if (num % i === 0) prime = false;
  }
  return prime;
};

// Anonymous function
anon = function (arr) {
  return arr.filter((i) => isPrime(i));
};
console.log(anon(arr));

// IIFE
(function (arr) {
  console.log(arr.filter((i) => isPrime(i)));
})(arr);

// Arrow function
arrow = (arr) => {
  return arr.filter((i) => isPrime(i));
};
console.log(arrow(arr));

////////////////////////////////////////////////
// Return all the palindromes in an array
////////////////////////////////////////////////

arr = ["test", "level", "javascript", "radar", "reviver", "peep", "arrow"];

// check if string is palindrome - returns true or false
const isPalindrome = (str) => {
  return str === str.split("").reverse().join("");
};

// Anonymous function
anon = function (arr) {
  return arr.filter((i) => isPalindrome(i));
};
console.log(anon(arr));

// IIFE
(function (arr) {
  console.log(arr.filter((i) => isPalindrome(i)));
})(arr);

// Arrow function
arrow = (arr) => {
  return arr.filter((i) => isPalindrome(i));
};
console.log(arrow(arr));

////////////////////////////////////////////////
// Return median of an array
////////////////////////////////////////////////

arr = [2, 3, 4, 1, 3, 6, 2, 6];

// find median of array
const getMedian = (arr) => {
  arr = arr.sort((a, b) => a - b); // sort array
  console.log(`sorted array: ${arr}`);
  if (arr.length % 2 === 0) {
    // even count
    // return average of 2 middle elements
    let mid = arr.length / 2;
    return (arr[mid] + arr[mid - 1]) / 2;
  }
  // odd count
  // return middle element
  return arr[parseInt(arr.length / 2)];
};

// Anonymous function
anon = function (arr) {
  return getMedian(arr);
};
console.log(anon(arr));

// IIFE
(function (arr) {
  console.log(getMedian(arr));
})(arr);

////////////////////////////////////////////////
// Remove duplicates from an array
////////////////////////////////////////////////

arr = [1, 1, 2, 3, 1, 6, 2, 2, 3, 3, 3, 4, 5];

// Anonymous function
const removeDuplicates = function (arr) {
  const nArr = [];
  arr.forEach((el) => {
    if (!nArr.includes(el)) nArr.push(el);
  });
  return nArr;
};
console.log(removeDuplicates(arr));

// IIFE
(function (arr) {
  console.log(Array.from(new Set(arr)));
})(arr);

////////////////////////////////////////////////
// Rotate an array by k times
////////////////////////////////////////////////

arr = [1, 2, 3, 4, 5, 6];

// Anonymous function
const rotateArrByK = function (arr, k, clockwise) {
  console.log(
    `rotating ${clockwise ? "clockwise" : "anticlockwise"} by ${k} times`
  );
  if (k > arr.length) k = k % arr.length;
  if (clockwise)
    return [...arr.slice(arr.length - k), ...arr.slice(0, arr.length - k)];
  return [...arr.slice(k), ...arr.slice(0, k)];
};
console.log(rotateArrByK(arr, 3, true));

(function (arr, k, clockwise) {
  console.log(rotateArrByK(arr, k, clockwise));
})(arr, 2, false);
