//stack(primivitive data types) and heap(reference data types)
//-----stack--get exact value -
let name="priti"
let anotherName=name
anotherName="priti patil"
console.log(name);
console.log(anotherName);
//----heap-- get referece of the value-
let userOne={
    email:"user@example.com",
    prnno:"2526ucs000"
}
let userTwo=userOne
userTwo.email="user2@example.com"
console.log(userOne.email);
console.log(userTwo.email);

// in stack we get exact value but in heap we get reference of the value. 
// so when we change the value of userTwo it also changes the value of userOne
//  because both are pointing to the same reference in heap.