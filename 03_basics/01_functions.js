
function sayMyName() {
console.log("B")
console.log("a")
console.log("q")
console.log("a")
console.log("u")
console.log("l")
console.log("l")
console.log("a")
console.log("h")

}
// sayMyName()

// function addTwoNumbers(num1, num2){
// console.log (num1+num2)
// }
function addTwoNumbers(num1, num2){
// let result = num1+num2
// return result

return num1+num2
}
const result = addTwoNumbers(2, 9)
// console.log("Result:", result)

function loginUserMessage(username){
    if (!username){
        console.log("please enter a user name")
        return
    } else{
        return `${username} just logged in`
    }

}
// console.log(loginUserMessage())

 function calculateCaratPrice(val1, val2, val3, ...num1){
    return num1
 }
//  console.log(calculateCaratPrice(200, 300, 400, 500, 600))

//  handleObjec = {
//     username: "Baqa",
//     price: 299
//  }
 function handleObject(anyobject){
console.log(`user name is ${anyobject.username} and price is ${anyobject.price}`)
 }
 handleObject({
    username: "Baqa",
    Price: 2999
 })

 const myNewArray = [200, 300, 400]

 function returnSecondValue(getArray){
    return getArray[1]
 }
//  console.log(returnSecondValue(myNewArray))
//  console.log(returnSecondValue[200, 300, 400])