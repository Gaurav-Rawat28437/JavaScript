// IIFEs:immediately invoke function expression
//IIEFs are commonly used to create private scope in javaScript,allowing variables and function to be encapsulated and inaccessible from outside the function
//it is used to prevent from multiple call and only use one time and then viped out 

(() =>{

    var a=Number(prompt("Enter number 1"))
    let b=Number(prompt("Enter number 2"))
    const c=Number(prompt("Enter number 3"))

    console.log("sum is"+(a+b+c))
}
)()