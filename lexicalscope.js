// lexical scope

var a = "Hello!"

function mathsTime() {
    var b = "Welcome to Maths Class."

    function problem(x) {
        var c = "The answer is..."
        console.log(a)
        console.log(b)
        console.log(c)
        console.log(answer)
        return timesByTwo(x)
    }

    var startWith = 5

    var answer = problem(startWith)
}

function timesByTwo(num){
    return num * 2
}

mathsTime()

// => Hello!
// => Welcome to Maths Class.
// => The answer is...
// => undefined