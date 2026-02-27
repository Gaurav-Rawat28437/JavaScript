// // ******** important ****** everythings in JS is objects expect undefined and null


// //objects: this is a data type
// //objects are hetrogenous
// // : this sign is collan
// // element is key and value pairs that pairs is called properties
// //array are iterable:we can perform loops in array but cannot performs loops in object so that objects are initerable

// let obj={}//creating an object

// let obj2={ // initialissing an objects with some value
//     name :"gaurva",
//     age:20
// }

// let obj3={
//     name :"uv",
//     age:19
// }

// //accessing values of an onjects
// console.log(obj2.name) //dot operator
// console.log(obj3["age"]) // must be passed as a string or else will be treated as a variable also called braket operator

// let obj4={
//     name:"dog",
//     legs:4
// }

// //adding properties to an object
// obj4.color="black"
// obj4["tale"]="true"
// console.log(obj4)

// let obj5={
//     key:"value",
//     no:5
// }

// //deleting a property
// delete(obj5.key)
// delete(obj5["no"])
// console.log(obj5)


let nestedObj={
    name:"gaurav",
    age:21,
    address:{
        city:"new delhi",
        country:"India"
    },
    nickNames:["UV","dabangg","rawatji"],
    ispahadi: true,
    sayHi: () => {
         console.log("hello uv")
    }
}

console.log(nestedObj.name)
console.log(nestedObj.age)
console.log(nestedObj.address.city)
console.log(nestedObj.nickNames[1])
console.log(nestedObj.ispahadi)
nestedObj.sayHi()


//only for-in loop can perform in objects

// let objs={
//     k1:"v1",
//     k2:"v2",
//     k3:"v3",
//     k4:"v4"
// }

// for(let item in objs)
// {
//     console.log(item,objs[item])
// }


//optional chaining :it check the operation and is there is any error it stops the code there 
let outobj={
    k1:"v1",
    middleobj:{
        innerobj:{
            ans:"answer"
        }
    }
}
console.log(outobj?.middleobj?.inrobj?.ans)
console.log("hello")