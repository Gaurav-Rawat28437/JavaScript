let arr=["e","c","b","a","d"]
// arr.sort() // sorting lexographically(dictionary order)   sorting in accending order
// console.log(arr)// lt is distructive method,it will change the original array

arr.sort((a,b)=>{
    return b.localeCompare(a) //sorting in decending
})
console.log(arr)
