//find methods:it is like linear search.
//it return single item where it condition is true and then stop ,if any condition is not match it will undefined
//time complexity of find methods is O(n)

// let arr=[
//     {name:"gaurav",isPremium:false},
//     {name:"singh",isPremium:true},
//     {name:"rawat",isPremium:false},
//     {name:"uv",isPremium:true},
// ]

// let isPremium=arr.find(item=>item.isPremium)
// console.log(isPremium)

//example

// //find first duplicate
// let num=[1,3,2,4,5,4]
// let dup=num.find((item,index)=>{
//     return num.indexOf(item)!=index
// })
// console.log(dup)

// //find an adult user
// let user=[
//     {name:"gaurav",age:20},
//     {name:"singh",age:14},
//     {name:"rawat",age:24},
//     {name:"uv",age:35},
// ]
// let adult=user.find(item=>item.age>18)
// console.log(adult)

// //find the first number whose previous number is odd and next number is even
// let nums=[3,7,11,15,18,21,22]
// let n=nums.find((item,index)=>{
//     return nums[index-1]%2!=0 && nums[index+1]%2==0
// })
// console.log(n)

//find next 
let Num=[10,20,30,10,50]
let sum=0
let ans=Num.find(item=>{
    if(sum>=60)
    {
        return true
    }
    else{
        sum+=item
    }
})
console.log(ans)
