//it is used when programmer wants to give answer other than true or false
// it work like OR(||) oprator,if anyone condition is true then it will automatically ignore all other condition
let n=-8
if(n>0){
    console.log("positive number")
}
else if(n<0){
    console.log("Negative number")
}
else{
    console.log("Zero")
}

let a=100 // if first condition is ture ,it will ignore other condition
if(a>70){
    console.log("A")
}
else if(a>90){
    console.log("B")
}
else{
    console.log("C")
}