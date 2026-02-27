// //HOF:those function which either accept a function as an argument or return a function

// //accept function as an argument
// function acceptFunctionAsAnArgument(fu)
// {
//     fu()
// }
// acceptFunctionAsAnArgument(()=>{ console.log("accept Function As An Argument")}) // acceptFunctionAsAnArgument() is HOF


// //return function
// function returnFunction()
// {
//     return () => { console.log("return a function ")}
// }
// let temp=returnFunction()
// temp() 
// //we can call that function like this
// returnFunction()()  //returnFunction() is HOF


// //use both
function both(ret)
{
    ret()
    return () => { console.log("hello") }
}
both(()=>{console.log("hy")})()



// //Callback fucntion: a function which is passed to a HOF to be excecuted later on
// function work(succes,failur)
// {
//     let workDone=false

//     if(workDone)
//     {
//         succes()
//     }
//     else
//     {
//         failur()
//     }
// }
// work(()=> { console.log("DONE")}, ()=> { console.log("NOT DONE")})  // succes and failur are callback function
