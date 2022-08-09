// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:


// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: The length method returns a number value based on the amount of characters in the string


// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: "o"
// b) Verify and explain: The greeting string at index 4 is what is targeted. "o" is the character at index 4 due to zero indexing.


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: "Ruby" will be logged in the console
// b) Verify and explain: if the index variable is set to 1 and we are console logging the item within the languages array that is specified by the number value in the index variable, we will output "Ruby", once again, due to zero indexing.


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: an error will display
// b) Verify and explain: toUpperCase() is a string method, so we would need to convert weekendDays (it is an array currently, storing string values within that array) to a string or we could utilize a for loop to use toUpperCase() on each string within the array. For example:

    for (let i = 0; i < weekendDays.length; i++) {
        console.log(weekendDays[i].toUpperCase())
    }


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: "number"
// b) Verify and explain: I know the length method returns a number value. We are not calling typeof on the dataTypes array, nor are we calling it on the strings stored within the array