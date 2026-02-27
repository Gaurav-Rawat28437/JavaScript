//reduce
//syntax
// let a=arr.reduce((accumulator,currentValue,currentIndex,arr)=>{
//     return accumulator+currentValue
// },//initial value of accumulator is first element of an arr)

// // reduce method in arr of a number
// let arr=[1,2,3,4,5]
// let value=arr.reduce((prev,curr)=>{
//     return prev+curr
// })
// console.log(value)

// // reduce method in arr of a string
// let str=["g","a","u","r","a","v"]
// let word=str.reduce((prev,curr)=>{
//     return prev+curr
// })
// console.log(word)

// example

// //product of all element



// let arr=[1,2,3,4,5]
// let product=arr.reduce((prev,curr)=>{
//     return prev*curr
// })
// console.log(product)

// //array into string
// let arr=[1,2,3,4]
// let str=arr.reduce((prev,curr)=>{
//     return prev+curr
// },"")
// console.log(str)

// //total number of element without using .length
// let arr=["a","b","c","d"]
// let length=arr.reduce((prev,curr)=>{
//     return prev+1
// },0)
// console.log(length)

// //maximum
// let arr=[10,5,20,8,78]
// let max=arr.reduce((prev,curr)=>{
//     return prev>curr?prev:curr
// })
// console.log(max)

// //sum of only even number
// let arr=[1,2,3,4,5,6,7,8]
// let even=arr.reduce((prev,curr)=>{
//     if(curr%2==0)
//     {
//         return prev+curr
//     }
//     return prev
// },0)
// console.log(even)

// //convert array into object where key is element and value is length
// let arr=["apple","banana","ball"]
// let ans=arr.reduce((prev,curr)=>{
//      prev[curr]=curr.length
//      return prev
// },{})
// console.log(ans)

// frequency of element
// let arr=["a","b","a","c","b","a"]
// let ans=arr.reduce((prev,curr)=>{
//     if(prev[curr])
//     {
//         prev[curr]++
//     }
//     else{
//         prev[curr]=1
//     }
//     return prev
// },{})
// console.log(ans)

// //flatter a single level nested array
// let arr=[[1,2],[3,4],[5]]
// let ans=arr.reduce((prev,curr)=>{
//      return prev.concat(curr.flat(Infinity))
     
// })
// console.log(ans)

//remove duplicate value in array
let arr=[1,2,2,3,4,3,5]
let ans=arr.reduce((prev,curr,)=>{
    if(!prev.includes(curr))
    {
        prev.push(curr)
    }
    return prev
},[])
console.log(ans)