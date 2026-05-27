const accountId=1234567
let accountEmail="priti@google.com"
var accountPassword="12345"
acccountCity="kolhapur"//not use but can be declaired without type
let accountState;//output is undefined
// accountId=23//not allowed to change the value of the constant value
/*prefer to not use var
because of issue in block scope and functional scope

*/
console.log(accountId);


accountEmail="patil@.com"
acccountCity="pune"
accountPassword="6789"

console.table([accountEmail,accountPassword,accountId,acccountCity,accountState])