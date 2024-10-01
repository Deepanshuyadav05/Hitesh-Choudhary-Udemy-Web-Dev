//*****Numbers*****

let balance = 132;
console.log(typeof balance);

//another way is
let anotherBalance = new Number(234);
console.log(anotherBalance);
//if we only need the value then we can use a method of object "valueof()"
console.log(anotherBalance.valueOf());

//*****boolean*****
let isActive = true
let isActive2 = new Boolean(true);  //not recommended

//*****null and undefined*****

//if we did't defined a value of a variable then its type is Undefined
let firstName;
console.log(firstName)

//now we have assigned a null value to firstName  now its type is null
firstName = null;
console.log(firstName);

//similarly we can assign undefined also
firstName = undefined;
console.log(firstName);

//String

let myString = "hello"
let myString2 = "hola"
let userName = `hitesh ${myString}`
let greetMsg = `ram ram`            //Template Literals or we can say String InterPolation