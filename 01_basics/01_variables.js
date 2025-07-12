const accountId = 22113344
let accountEmail = "baqa@1122.com"
var accountPassward = "887766"
accountCity = "Islamabad"
let accountState;


//account id = 2// not allowed

accountEmail = "dawn.com"
accountPassward = "443355"
accountCity = "Karachi"

/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassward, accountCity, accountState])
