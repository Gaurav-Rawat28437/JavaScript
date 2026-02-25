//scope: where in the code a variable is used
//global variable:can be accessed anywhere
//block variable:var will again show global scope where let and const will show block scope,i.e.,they can only used inside a block
//functional variable:var,let and count see as a functional scope inside a function ,it cannot used outside the function


var globalA=1
let globalB=2
const globalC=3 /// there are global variable
console.log(globalA)
console.log(globalB)
console.log(globalC) //this can be accessed anywhere



{
    var blockA=1
    let blockB=2
    const blockC=3 //block variable
    // console.log(blockA) 
    // console.log(blockB) 
    // console.log(blockC)
}
console.log(blockA) //only var value will be print because var cannot redeclared and reinitialised
console.log(blockB) //let and const will not print
console.log(blockC)


function abc()
{
    var functionA=1
    let functionB=2
    const functionC=3
    // console.log(functionA)
    // console.log(functionB)
    // console.log(functionC)
}
    console.log(functionA) //no one will print
    console.log(functionB)
    console.log(functionC)
abc()

//differance btw var ,let and const
/* 
    base on redeclaration and reinitialisation

        var:redeclaration and reinilialisation is possible
        let:only reinilialisation is possible
        const:nothing is possible

    base on scope

        var it show global scope inside the block. let and const:it show block scope
        In functional scope;let ,var and const everyone show functional scope
*/