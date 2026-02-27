let obj={
    name:"uv",
    age:20,
    address:{
        city:"delhi",
        country:"india"
    },
    sayhi:()=>{
        console.log("hello")
    }
}
//shallow coping should not made for nested objects
// if we use shallow clonning here,it will share the same referrance of nested object

//deep clonning
let obj1=structuredClone(obj) //structureclone copy everthing of an object except function (it copy undefined)
console.log(obj)
console.log(obj1)

obj1.address.city="uttrakhand"

console.log(obj)
console.log(obj1)