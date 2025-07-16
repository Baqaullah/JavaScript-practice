const user = {
    username: "Baqa",
    price:  9990,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
    
    
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


// console.log(this)

// function add(num1, num2){
//     return num1*num2

// }
// console.log(add(8, 9))

// const add2 = function (num1, num2){
// return num1+num2
// }
// console.log(add2(6, 90))

// const fun =(num1, num2)=>{
//     return num1-num2
// }
// console.log(fun(19, 3))

// const multiply = (num1, num2)=>{
//     return num1*num2
// }
// console.log(multiply(4, 90))

const minus2 = (num1, num3) => (num1-num3)
console.log(minus2(129, 50))