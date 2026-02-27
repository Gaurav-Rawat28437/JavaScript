let obj={
    name:"uv",
    age:20
}

// let obj2=obj1  not good and share same address(referance)

//shallow copy
let obj2={...obj}
obj.name="gaurav"
console.log(obj)
console.log(obj2)


//shallow copy should not made for nested objects
let user={
    name:"uv",
    age:20,
    address:{
        city:"delhi",
        country:"india"
    },
    sayhi:()=>{
        console.log("hy")
    }
}
//let user1=user

let user1={...user}
console.log(user)
console.log(user1)

user1.name="singh"
user1.address.city="pune"// in nested object, it will change the value because same referrance
// if we use shallow clonning here,it will share the same referrance of nested object


console.log(user)
console.log(user1)