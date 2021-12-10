console.log("Knock Knock")
console.log("Who's there?")
console.log(person)

var person = "Beth"

console.log("\nKnock Knock")
console.log("Who's there?")
console.log(person)

//=> "Knock Knock"
//=> "Who's there?"
//=> undefined

//=> "Knock Knock"
//=> "Who's there?"
//=> "Beth"

// if you use let person = "Beth" you get a referenceError that it can't access person
// let isn't hoisted
// if you want to get the same result as above, you can put let person at the top of the file and then assign a value to person in the same spot
var person

console.log("Knock Knock")
console.log("Who's there?")
console.log(person)

person = "Beth"

console.log("\nKnock Knock")
console.log("Who's there?")
console.log(person)

//=> "Knock Knock"
//=> "Who's there?"
//=> undefined

//=> "Knock Knock"
//=> "Who's there?"
//=> "Beth"

// using const isn't hoisted so it will have the same error as above
// if you try and put const person at the top without assigning it a value, you will get a syntax error
console.log("Knock Knock")
console.log("Who's there?")
console.log(person)

const person = "Beth"

console.log("\nKnock Knock")
console.log("Who's there?")
console.log(person)

// using a function declaration
console.log("Knock Knock")
console.log("Who's there?")
console.log(person())

function person(){
    return "Beth"
}

console.log("\nKnock Knock")
console.log("Who's there?")
console.log(person())

//=> "Knock Knock"
//=> "Who's there?"
//=> "Beth"

//=> "Knock Knock"
//=> "Who's there?"
//=> "Beth"

// using an arrow function will throw a reference error as it is not hoisted also doesn't matter if you use var instead
console.log("Knock Knock")
console.log("Who's there?")
console.log(person())

const person = () => {
    return "Beth"
}

console.log("\nKnock Knock")
console.log("Who's there?")
console.log(person())


