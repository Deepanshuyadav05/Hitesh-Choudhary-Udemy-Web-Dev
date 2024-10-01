// check if a num is greater than another num
let num1 = 29;
let num2 = 34;

console.log("I am upper code")

if (num1 < num2) {
    console.log("num1 is greater than num2")
}
else{
    console.log("num1 is smaller than num2")
}
console.log("I am bottom code")

//check if a string is equal to another string

let username = "chai"
let anotherUsername = "code"

if (username == anotherUsername) {
    console.log("you can pick this username")
}
else{
    console.log("pick another username")
}

//checking if a variable is a number or not
let score = 44

if(typeof score === "number"){
    console.log("yep, this is a number")
}
else{
    console.log("no that is not a number")
}

//check if a boolean value is true or false

let isTeaReady = false

if(isTeaReady){
    console.log("tea is ready")
}
else{
    console.log("tea is not ready")
}

//check if array is empty or not

let items = []

if (items.length === 0){
    console.log("array is empty")
}
else{
    console.log("array is not empty")
}