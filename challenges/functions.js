// ==== Callbacks ====  

/* Step 1: Create a higher-order function
 * Create a higher-order function named consume with 3 parameters: 
 a, b and cb
 * The first two parameters can take any argument 
 (we can pass any value as argument)
 * The last parameter accepts a callback
 * The consume function should return the invocation of cb, 
 * passing a and b into cb as arguments
 */

// create callback
const consume = (cb, a, b) => cb(a, b);

/* Step 2: Create several functions to callback with consume();
 * Create a function named add that returns the sum of two numbers
 * Create a function named multiply that returns the product of two numbers 
 * Create a function named greeting that accepts a first and last name 
 * and returns "Hello first-name last-name, nice to meet you!"
 */
// created add function and call it with (cb"consume")
const add = (num1, num2) => num1 + num2;

console.log(consume(add, 2, 2));

// created multiply function and call it with (cb"consume")
const multiply = (num1, num2) => num1 * num2;

console.log(consume(multiply, 10, 16));

// created greeting function and call it with (cb"consume")
const greeting = (fname, lName) => `Hello, I am  ${fname} ${lName} nice to meet you!`

console.log(consume(greeting, 'Mary', 'Poppins'));

/* Step 3: Check your work by un-commenting the following calls to consume(): */
// console.log(consume(2, 2, add)); // 4
// console.log(consume(10, 16, multiply)); // 160
// console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.

// My Explanation of Closures: 
//Nested functions are when we put function inside of a function.
// The variables on the global scope are accessable to the functions.
// However the variable on the global scope cannot access 
//those that are on the local scope.
// In Nested functions inheritance flows downward.



const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();