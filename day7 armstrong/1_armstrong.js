// let n=153
// let td=n%10
// let n1=(n-td)/10
// let md=n1%10
// let fd=(n1-md)/10
// console.log(fd,md,td)
// let power=Math.ceil(Math.log10(n))+1
// console.log(power)
// let lhs=(fd**power) + (md**power) + (td**power)
// console.log(lhs)


let n=153
let temp=n

let sum=0
let p=Math.ceil(Math.log10(n))+1
while(temp>0)
{
   let digit=temp%10
   sum+=(digit**p)
   temp=Math.floor(temp/10)
}
let amr= (sum==n)?true:false
console.log(amr)



// n=6
// let temp=1
// for (let i=1;i<n;i++){
//     let str=""
    
//     for(let j=1;j<=i;j++){
//          if(i==n || j==1 || i==j){
//         str+=String.fromCharCode(temp+64)
       
//          }
//          else{
//             str+="  "
//          }
//       temp++
//     }
   
//     console.log(str)
    
// }