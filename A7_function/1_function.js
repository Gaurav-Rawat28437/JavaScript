//function are block of code which can be run as required 
//function promotes reusabilty of code


function sayhi()   // function define
{
    console.log("hello world")
}

sayhi() //call or run or invoke



function sayh2(name="user") // name: paramter  and user : default paramter
{
    console.log("hello "+ name)
}
sayh2("gaurav") //"gaurav" : it is called argument
sayh2("uv") // "us" is argument
sayh2()  // when user not pass the argument then default parament is use


//sum of two number by user input
let num1=Number(prompt("enter number 1"))
let num2=Number(prompt("enter number 2"))

function sum(a,b)
{
    console.log(a+b)
}

function diff(a,b)
{
    console.log(a-b)
}

function multi(a,b)
{
    console.log(a*b)
}

function divide(a, b)
{
    console.log(a/b)
}

sum(num1, num2)
diff(num1, num2)
multi(num1, num2)
divide(num1, num2)