//sorting in STRING array

let arr=["e","c","b","a","d"]
// arr.sort() // sorting lexographically(dictionary order)   sorting in accending order
// console.log(arr)// lt is distructive method,it will change the original array

arr.sort((a,b)=>{
    return b.localeCompare(a) //sorting in decending
})
console.log(arr)



//sorting in BOOLEAN array

let aar=[true,false,false,true]
// aar.sort() //false will print first
// aar.sort((a,b) => a-b )//false will print first
// console.log(aar)
aar.sort((a,b) => b-a)//true will print first
console.log(aar)



//sorting in NUMBER array

let narr=[99,10,12,11,1,2,32,22,30,3,9]
// narr.sort() // it will print [1,10,11,12,2,22,3,30,32,9,99]

// narr.sort((a,b) => a-b) //sort in accending order
// console.log(narr)

narr.sort((a,b) => b-a) //sort in deccending order
console.log(narr)



//sorting in OBJECTS in array

let user=[
    {name:"gaurav",age:20,isPaid:true},
    {name:"gabbar",age:40,isPaid:false},
    {name:"saktiMan",age:45,isPaid:false},
    {name:"spiderMan",age:18,isPaid:false},
    {name:"gangadhar",age:45,isPaid:true}
]

// //sorting behalf of name in array of an object

// user.sort((a,b) => {
//     return a.name.localeCompare(b.name)
// }) //sorted on behalf of alphabet
// console.log(user)

// user.sort((a,b) => {
//     return b.name.localeCompare(a.name)
// }) //sorted on behalf of reverse alphabet
// console.log(user)


// //sorting behalf of age in array of an object

// user.sort((a,b) => {
//     return a.age - b.age
// }) // smallest one comes first
// console.log(user)

// user.sort((a,b) => {
//     return a.age - b.age
// }) // biggest one come first
// console.log(user)


//sorting behalf of isPaid in array of an object

// user.sort((a,b) => {
//     return a.isPaid - b.isPaid
// }) // non paid come first
// console.log(user)

user.sort((a,b) => {
    return b.isPaid - a.isPaid
}) // paid one come first
console.log(user)