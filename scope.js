// scope
function twinkleTwinkle(){
    var a = "TRAD: Twinkle Twinkle little star"
    let b = "TRAD: How I wonder what you are!"
    const c = "TRAD: Up above the world so high"
    d = "TRAD: like a diamond in the sky."

    if (true) {
        var a = "CARROLL: Twinkle Twinkle little bat"
        let b = "CARROLL: How I wonder what you're are!"
        const c = "CARROLL: Up above the world you fly"
        d = "CARROLL: like a teatray in the sky."
    }

    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
}

//=> a: CARROLL
//=> b: TRAD
//=> c: TRAD
//=> d: CARROLL

// let and const are block scoped so they don't even read anything inside of the if statement
// var is lexical scope
// if you put all the console logs inside of the if statement, they would all be carroll
// if you had const c = ["TRAD: Up above the world so high"] and in the true block had c.push("CARROLL: Up above the world you fly")
    // the CARROLL would be added to the array with TRAD because we are not changing the reference 