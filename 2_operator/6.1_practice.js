let n=2024 ,n1 =2100 ,n2=2023 ,n3=2000

let ans=(n%4==0 && n%100!=0) || (n%100==0 && n%400==0)
console.log(ans)
let ans1=(n1%4==0 && n1%100!=0) || (n1%100==0 && n1%400==0)
console.log(ans1)
let ans2=(n2%4==0 && n%2100!=0) || (n2%100==0 && nn3%400==0)
console.log(ans2)
let ans3=(n3%4==0 && n3%100!=0) || (n3%100==0 && n3%400==0)
console.log(ans3)