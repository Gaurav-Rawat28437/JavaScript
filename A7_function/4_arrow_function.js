// arrow function 
//value passes in arrow function is parameter

const sum=(a,b)=>{
    console.log(a+b)
}

sum(1, 2)


//example
const multi=(a,b)=>{
    return a*b
}
console.log(multi(2,2))


//example
const sayhi=(name="user")=>{
    console.log("hello " + name)
}
sayhi("uv")


//example
const say=(name="user")=>{
    console.log("hello "+name)
}
console.log(say("gaurav"))



//example
const say1=(name="user")=>{
    return "hello "+ name
}
console.log(say1("gaurav"))


//example
const say2=(name="user")=> "hello "+ name

console.log(say2("dabangg"))



//example
const say3=name=> console.log("hello "+ name)

say3("gsr")


//example
const say4= name => "hello "+ name

console.log(say4("rawatji"))