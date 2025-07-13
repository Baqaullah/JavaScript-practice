//Primitive data types
// 7 categories of primitive - String, , Number, Boolean, null, NaN, undefined, Symbol, BigInt

// reference data type or non primitive data type
// Arrays, Objects, Functions


///********************* Memory **************************//

// Stack and Heap Memory
// Stack (used in Primitive Data type) -- Heap (used in non-primitive data type)

let myYoutubeName= "Study-Corner"
let anotherName= myYoutubeName
anotherName = "MyYoutubeChannel"

console.log(myYoutubeName)
console.log(anotherName)

let userOne = {
    email: "baqa@gmail.com",
    addressCity: "Larkana"
}

let userTwo = userOne
userTwo.email="studycorner@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)