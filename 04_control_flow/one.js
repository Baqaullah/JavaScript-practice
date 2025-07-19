// ////if
// if(condition){
//     //scope  -- if condition is true, code will execute ortherwise not
// }

const userLoggedIn = true
const debitCard = true

const userLoggedInFromGoogle = false
const userLoggedInFromEmail = true

if (userLoggedInFromGoogle || userLoggedInFromEmail){
    console.log("You are allowed to login either through google or from email")
}

