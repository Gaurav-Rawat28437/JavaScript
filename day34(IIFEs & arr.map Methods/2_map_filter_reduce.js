// map is a methods, methods are those which is inside on objects

//map is method used is array
//returned array is going to be of same length as original array
//whatever the callback is returning will be set/pushed in the resultant array

// let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// //double the elements in array
// let double=arr.map(item=>item*2)
// console.log(double)

// //convert number to string
// let str=arr.map(item=>String(item))
// console.log(str)

// //capitalise first letter
// let =arr1=["gaurav","uv","singh","rawat"]
// let cap=arr1.map(item=>String(item).charAt(0).toUpperCase()+item.slice(1))
// console.log(cap)

// //exact property in object
// let user=[
//     {id:1,name:"gaurav"},
//     {id:2,name:"rawat"},
//     {id:3,name:"uv"}
// ]
// let obj=user.map(item=>item.name)
// console.log(obj)

// //18+ status
// const people=[
//     {name:"gaurav",age:20},
//     {name:"uv",age:17},
//     {name:"rawat",age:18}
// ]

// // let obj1=people.map((item)=>{
// //     let obj={...item}
// //     if(obj.age>18)
// //     {
// //          obj.isadult=true
// //          return obj
// //     }
// //     else{
// //          obj.isadult=false
// //          return obj
// //     }
// // })

// let obj1=people.map((item)=>({...item,isAdult:item.age>18?true:false}))
// console.log(obj1)
// console.log(people)

// //price with GST(18%)
// let price=[100,250,400]

// let newPrice=price.map(item=>item+(item*(18/100)))
// console.log(newPrice)

// // //format full name
// let users=[
//     {firstName:"gaurav",lastName:"rawat"},
//     {firstName:"dabangg",lastName:"bhai"}
// ]

// let capital=users.map(item=>{
//     return item.firstName.charAt(0).toUpperCase() + item.firstName.slice(1)+" "+item.lastName.charAt(0).toUpperCase() + item.lastName.slice(1)
// })
// console.log(capital)

// //convert temperature
// let temp=[0,10,20,30]
// let f=temp.map(item=>(item/5*9)+32)
// console.log(f)

// // //return massage based on score
// let score=[95,67,40,82]
// let massage=score.map(item=>item>=90 && item<=100?"Excellent":item>=60 &&item<90?"pass":"fail")
// console.log(massage)

// //mask phone number
// let phone=["9818077948","9310230658"]
// let mask=phone.map(item=>"******"+item.slice(6))
// console.log(mask)

// //normalize product data
// let product=[
//     {name:"laptop",price:50000},
//     {name:"phone",price:25000}
// ]
// let data=product.map(item=>{
//     let val={}
//     val.name=item.name.toUpperCase()
//     val.price="$"+item.price
//     return val
// })
// console.log(data)