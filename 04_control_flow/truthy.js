const userEmail= "b@gmail.com"
if (userEmail){
    console.log("Got the user email")
}else {
    console.log("dont have user email")
}

// falsy values 
// false, 0, -0, Bigint 0n, "", null, undifined, NaN

// truthy values
// "0", "false", " ", [], {}, function(){}


//nullish coalescing operator ??: null undefinied

// let val1;
// val1 = 5 ?? 10 
// val1 = null ?? 20
// val1 = undefined ?? 20
// console.log(val1)


// Terniary Operators

// syntax
// condition ? true : false

const teaPrice= 100
teaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")