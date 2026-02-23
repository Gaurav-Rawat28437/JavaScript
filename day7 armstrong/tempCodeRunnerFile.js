let n=153
let td=n%10
let n1=(n-td)/10
let md=n1%10
let fd=(n1-md)/10
console.log(fd,md,td)
let power=Math.ceil(Math.log10(n))
console.log(power)
let lhs=(fd**power) + (md**power) + (td**power)
console.log(lhs)