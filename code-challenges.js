// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Pseudo code:
/*
1.  Create function named boilingFunc
2.  Function takes in a number (temp) as argument
3.  Conditional statement  if temp is at, below, or above boiling point
4.  Output temp parameter is above boiling point in string
*/

const belowBoil = 42
const aboveBoil = 350
const atBoil = 212

const boilingFunc = (temp) => {
    if (temp === belowBoil || temp < atBoil) {
        return `${temp} is below boiling point`
    } else if (temp === atBoil) {
        return `${temp} is at boiling point`
    } else if (temp === aboveBoil || temp > atBoil) {
        return `${temp} is above boiling point`
    }
}

console.log(boilingFunc(42))
console.log(boilingFunc(31))
console.log(boilingFunc(212))
console.log(boilingFunc(350))
console.log(boilingFunc(400))


// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// Pseudo code:
/*
1.  Create new variable to store both arrays using concat method
2.  Console log new array length 
*/

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

let bothNumArr = myNumbers1.concat(myNumbers2)
console.log(bothNumArr.length)



// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 ohcE"

// Pseudo code:
// 1. Console log current cohort string
    // 2. Use split method to change string into array, splitting on every character
    //     3. Use reverse method to reverse every character in array
    //         4. Join array into string
const currentCohort = "Echo 2022"

console.log(currentCohort.split('').reverse().join(''))


// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Pseudo code:
// 1. Loop over array length
// 2. Conditional statement testing for even or odd with modulo operator on each item in array
    // 3. Inside IF loop, output "odd" or "even"

const myArray = [13, 34, 5, 10, 27, 42]

for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] % 2 === 0) {
        console.log(`${myArray[i]} is even`)
    } else {
        console.log(`${myArray[i]} is odd`)
    }
}



// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Pseudo code:

// 1. Create function named mathSub (takes in two numbers as arguments)
// 2. Conditional statement if num1 is greater or less than num2
//     3. if num1 is smaller, subtract num2 - num1 and output result
//     4. else subtract num1 - num2 and output result

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24


const mathSub = (num1, num2) => {
    if (num1 < num2) {
        return num2 - num1
    } else {
        return num1 - num2
    }
}

// console.log(mathSub(58, 100))
// console.log(mathSub(100, 58))
// console.log(mathSub(27, 24))
// console.log(mathSub(24, 27))

// Bonus Test Assertion function
// function will test for correct output
// if result of function called is equal to expected value
    // console will log as test passing
// else test fails

function testAssertEquals(actual, expected, test) {
    if (actual === expected) {
        console.log(`Actual: ${actual} | Expected: ${expected} | TEST: [${test}] works`)
    } else {
        console.log(`Actual: ${actual}| Expected: ${expected}| TEST: [${test}] FAILED`)
    }
}

let output = mathSub(58, 100)
testAssertEquals(output, 42, "smaller number subtracted from larger number")
let output2 = mathSub(27, 24)
testAssertEquals(output2, 3, "smaller number subtracted from larger number")
