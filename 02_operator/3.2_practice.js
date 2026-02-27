const readline=require("readline");
const code=readline.createInterface({
  input:process.stdin
});
const userInput=[]
code.on("line" ,(data) =>
{
   userInput.push(data);
});
//ignore code above It
code.on ("close",() =>{
  let input = userInput // take input from user
  
  let a=Number(input[0])  // Number():it hepl to change string into number 
  //input[0]: it help to take first user input
  let b=+input[1]   // +(): it help to to change string into number
  //input[1]: it help to take second user input
  
let sum=a+b
let multiply=a*b
let divide=a/b
let difference=a-b
let reminder=a%b
let exponential=a**b
 console.log(sum) 
 console.log(difference)
 console.log(multiply)
 console.log(divide)
 console.log(reminder)
 console.log(exponential)
 console.log(2**-1)
  
});
