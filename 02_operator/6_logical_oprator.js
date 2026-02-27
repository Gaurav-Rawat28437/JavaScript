// &&(AND)  
let a=1
let b=2
let c=3
let ans=a==1 && b==2 && c==3
console.log(ans) // if ans=a==4 && b==2 && c==3,if any one condidition is false it will give you false
/* IN && oprator,
if first condition is true then it check next condition.
if first condition is false then it does not check the other condition.  */


// ||(OR)   
let a1="pani"
let b1="coke"
let c1="nimbupani"
let ans1=a1=="pani" || b1=="coke" || c1=="nimbupani"
console.log(ans1) // if a1==pep && b1==coke && c1==nimbupani ,it any one condition is true it will give you ture
/* IN && oprator,
if first condition is true then it does not check next condition.
if first condition is false then it check the other condition until any condition is true.  */

// !(NOT)
let m=true
console.log(!m) //change the condition