//// check all number is positive and at least one number is even
let arr=[1,3,5,6,7]
let every=arr.every(item=>item>0 && item%2==0)
console.log(every)

let some=arr.some(item=>item>0 && item%2==0)
console.log(some)

////check if every user is active or at least one user is active
// let arr=[
//     {name:"A",active:false},
//     {name:"B",active:true}
// ]
// let every=arr.every(item=>item.active==true)
// console.log(every)

// let some=arr.some(item=>item.active==true)
// console.log(some)

// let arr=[
//     {name:"Bag",stock:10,price:600},
//     {name:"Shoes",stock:5,price:300}
// ]
// let every=arr.every(item=>item.stock>0 && item.price>500)
// console.log(every)

// let some=arr.some(item=>item=>item.stock>0 && item.price>500)