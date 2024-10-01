//Object

//to select all similar element use ctrl+D
const userName = {
    firstName : "hiteh",
    isLoggedIn: false,
    //if we want to give name with space the add quotes
    "add class" : "10th"
}
//updating value
userName.firstName = "Deep";
//adding new value
userName.LastName = "yadav";
console.log(userName.firstName)
console.log(userName.LastName)
console.log(userName)

console.log(userName)
console.log(typeof userName)

//and to access it we use ["add class"] to access the name
console.log(userName["add class"])


//Array
//we can use different datatypes in array
let heros = ["a", "b", "c", true]

//to access these elements
console.log(heros[0])