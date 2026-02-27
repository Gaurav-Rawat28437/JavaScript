//strngs:  string are immutable


let str="gaurav"
console.log(str.length) // print length of the string
console.log(str[0])  // print index element
console.log(str[-1]) //print undefined because -1 is not in the index
console.log(str.charAt(1)) // print element of that index

let val=str.replace("a","m") // it will replace the a with m
console.log(val)
console.log(str)

let val1=str.replaceAll("a","m")
console.log(val1)
console.log(str)

//camel case
let myNameIsGaurav="hello"
//snake case
let my_name_is_gaurav="uv"
//let pascal case
let MyNameIsGaurav="hello"
//screaming snake case
let MY_NAME_IS_GAURAV="hello"