//strings are immutable,it means that once a string is created, its value cannot be changed.
//suppose,
let a="abc"
let b="abc"
// in heap, "abc" is created at some address(suppose 2000 address) {note: if sting is same it only store one string}
//in stack, a and b is made , and a and b points the address of string "abc"
//in javascript , it does not make similar strings in heap in order to prevent memory from bulking out

//if you want to change the vlaue of a="xyz"




let str="gauravrawat"
console.log(str.slice(3,6))
console.log(str.slice(-4,-1))
// str.splice()  not possible
console.log(str.toUpperCase())
console.log(str)

let srr="my name is uv"

console.log(srr.includes("m"))
console.log(srr.includes("n",6))
console.log(srr.concat("and whats your name"))
console.log(srr.endsWith("uv"))
console.log(srr.startsWith("mynbjdfbv"))

let email="uv@gamil.com"
