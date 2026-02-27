//filter is array method.
// it take callback function as an argument.
// it execute on each element in an array and return a boolean value(true to keep element in array and false to exclude it).
// we can't change what the callback function of filter will return,it always return the item of the basic of whether our check returns true or false(true to return item and false to not return nothing)
//filter can / cannot return array of original size.


let arr=[1,2,3,4,5,6,7,8,9,10]

// let filter=arr.filter((item,index)=>{
//     return true
// })
// console.log(filter)

// let filter1=arr.filter((item,index)=>{
//     return item % 2 == 0
// })
// console.log(filter1)


// //example

// //filter even number
// let nums=[1,2,3,4,5,6]
// let even=nums.filter(item=>item%2==0)
// console.log(even)

// // //greater then 10
// let arr1=[5,12,7,15,24,1,100]
// console.log(arr1.filter(item=>item>10))









// //remove falsy value
// let value=[0,1,false,true,"","hello",null,undefined]
// let removeFalsy=value.filter(item=>item)
// console.log(removeFalsy)

// //filter adults
// let users=[
//     {name:"gaurav",age:20},
//     {name:"rawatji",age:15},
//     {name:"uv",age:17}
// ]

// let adult=users.filter(item=>item.age>18)
// console.log(adult)

// //filter product in stock
// let products=[
//     {name:"Laptop",inStock:true},
//     {name:"phone",inStock:false},
//     {name:"tablet",inStock:true}
// ]
// let stock=products.filter(item=>item.inStock)
// console.log(stock)

// //filter word starting with a
// let word=["apple","orange","grapes","avacado"]
// let letter=word.filter(item=>item[0]=="a")
// console.log(letter)

// //filter number divide by 3 and 5
// let number=[5,10,15,20,30,33]
// let divide=number.filter(item=>item%3==0 && item%5==0)
// console.log(divide)

// //remove dublicate value
// let n=[1,2,2,3,4,4,5]
// let removeDunlicate=n.filter((item,index)=>{
//     return n.indexOf(item)==index
// })
// console.log(removeDunlicate)

// //filter user with valid email
// const user1=[
//     {name:"A",email:"a@gmail.com"},
//     {name:"B",email:""},
//     {name:"C"}
// ]

// const validEmail=user1.filter(item=>{
//     return item.email
// })
// console.log(validEmail)

// //filter palindromes
// const words=["madam","racecar","hello","level"]
// const palindromes=words.filter(item=>{
//    return item == item.split("").reverse().join("")
// })
// console.log(palindromes)

//filter number that appear more than once
// const nu=[1,2,2,3,3,3,4,4,4,4]
// const appear=nu.filter((item,index)=>{
//     return nu.indexOf(item) == index && nu.lastIndexOf(item)!=index
// })
// console.log(appear)

//chain filter and map
// const usr=[
//     {name:"gaurav",age:20},
//     {name:"rawatji",age:16},
//     {name:"uv",age:28},
// ]

// const obj=usr.filter(item=>{
//     return item.age>18
// })
// let map=obj.map(item=>item.name)
// console.log(map)

// //custom filter logic
// const NUM=[10,25,30,45,50]
// const logic=NUM.filter(item=>item%10==0 || item%10==5 )
// console.log(logic)

