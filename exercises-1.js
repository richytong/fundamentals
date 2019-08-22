/*
Fundamentals Study Guide
1. What are the different primitive types in Javascript? In Python? In C++?
2. What is an operator? What are the operators in Javascript? What's the difference between `==` and `===` in Javascript?
3. What is a variable? How do you declare a variable in Javascript, Python, C++? How do you initialize a variable in Javascript, Python, C++? What's the difference between declaring and initializing variables?
4. What is an array? How do you initialize an array in Javascript? What is a hashmap? What is an object? How do you initialize an object in Javascript?
5. What is a for loop? A while loop? Give Javascript examples using each.
6. What is an `if` statement? How do you write an if statement in Javascript?
7. What is a function? What is a function signature? What are the two ways you can write functions in Javascript? What is a recursive function? Recursion might sound cool now but actually it can be pretty shitty, why is this?

Exercises
  implement the following functions
  there are function calls following the implementation that will serve as examples & test cases
*/

const addTwoNumbers = (a, b) => {
  // add a and b then return that sum
}
addTwoNumbers(1, 2) // => 3
addTwoNumbers(1, -2) // => -1

const findMinimumValue = (arr) => {
  // finds minimum value in arr
}
findMinimumValue([1, 2, 3]) // => 1
findMinimumValue([1, 1, 1]) // => 1

const dotProduct = (arrA, arrB) => {
  // calculates the dot product of two arrays/vectors
  // https://en.wikipedia.org/wiki/Dot_product
  // what happens when arrA and arrB are different lengths?
}
dotProduct([1,2,3], [4,5,6]) // => 1*4 + 2*5 + 3*6 => 30

const makeCountsObj = (arr) => {
  // returns an object, keys are unique items in arr
  // values are the number of times they show up respectively
}
makeCountsObj(['a', 'a', 'a', 'b', 'b', 'c', 'd']) // => { a: 3, b: 2, c: 1, d: 1 }
makeCountsObj([]) // => {}

const evenOrOdd = (n) => {
  // returns 'even' if n is an even number, 'odd' if n is odd
}
evenOrOdd(2) // => 'even'
evenOrOdd(3) // => 'odd'

const deepEqual = (objA, objB) => {
  // { a: 1 } === { a: 1 } is false. why?
  // (hint: primitive vs non-primitive types)
  // implement deepEqual such that deepEqual({ a: 1 }, { a: 1 }) is true
}
deepEqual({ a: 1 }, { a: 1 }) // => true
deepEqual({}, {}) // => true
deepEqual({ a: 1 }, {}) // => false

const indexOf = (arr, item) => {
  // returns the index of item in arr
  // returns -1 if item not found in arr
  // bonus: extend the use case for non-primitive types (objects and arrays)
}
indexOf([1, 2, 3], 1) // => 0
indexOf([1, 2, 3], 4) // => -1
// bonus
indexOf([{ a: 1 }, { a: 2 }, { a: 3 }], { a: 3 }) // => 2

const map = (arr, fn) => {
  // returns an array with fn applied to each item in arr
}
map([1, 2, 3], item => item + 1) // [2, 3, 4]
map([1, 2, 3], item => item) // [1, 2, 3]

const filter = (arr, fn) => {
  // returns an array with items of arr filtered out if fn(item) is false
}
filter([1, 2, 3], item => item > 1) // [2, 3]

const reduce = (arr, fn, initialValue) => {
  // reduces arr to a single value dictated by function fn.
  // fn takes the arguments (accumulator, currentValue) and
  // should return a new accumulator value to be used in further iterations
  // i hate this function because I feel like this function actually reduces
  // code clarity but i was asked to use this in an interview once
  // implementing this is a good exercise to wrap your head around Javascript
  // and how it just throws functions around everywhere
}
// this example effectively sums all the items in [1, 2, 3]
reduce([1, 2, 3], (accumulator, currentValue) => {
  return accumulator + currentValue
}, 0) // => 6
// this one is more common because it concerns arrays of objects
// an array of objects could represent a list of users for example
const users = [
  { id: 1, name: 'weph', color: 'brown', alias: 'beeg boyfran' },
  { id: 2, name: 'luny', color: 'black', alias: 'medium girlfran' },
]
// below returns an array of aliases from users
reduce(users, (accumulator, currentValue) => {
  accumulator.push(currentValue.alias)
  return accumulator
}, []) // => ['beeg boyfran', medium girlfran']

const fibonacci = (n) => {
  // returns the nth term in the fibonnaci sequence, starting at 0
  // generally, the fibonacci sequence follows the formula
  //   fib(n) = fib(n - 1) + fib(n - 2)
  // https://www.mathsisfun.com/numbers/fibonacci-sequence.html
  // hint: recursion, recursive
}
fibonacci(0) // => 0
fibonacci(1) // => 1
fibonacci(2) // => 1
fibonacci(3) // => 2
fibonacci(4) // => 3
fibonacci(5) // => 5
fibonacci(6) // => 8
fibonacci(7) // => 13

const iterativeFibonacci = (n) => {
  // this should have the same behavior as above
  // but you're not allowed to call this function recursively
  // hint: iteration, iterative
}
iterativeFibonacci(0) // => 0
iterativeFibonacci(1) // => 1
iterativeFibonacci(2) // => 1
iterativeFibonacci(3) // => 2
iterativeFibonacci(4) // => 3
iterativeFibonacci(5) // => 5
iterativeFibonacci(6) // => 8
iterativeFibonacci(7) // => 13

const reverseString = (s) => {
  // reverses string s
  // hint: use recursion
}
reverseString('hey') // => 'yeh'
reverseString('giraffarig') // => 'giraffarig'

const iterativeReverseString = (s) => {
  // reverse string s, no recursion
  // hint: use iteration
}
iterativeReverseString('hey') // => 'yeh'
iterativeReverseString('giraffarig') // => 'giraffarig'
