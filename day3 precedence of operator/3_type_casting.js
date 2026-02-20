// type casting

//explicit (type conversion) when user change  datatype in another datatype

let a=20
let aInString=String(a)
console.log(aInString)

let b=100
let bInBoolean=Boolean(b)
console.log(bInBoolean )

//implicit (type coersion) when javasript change datatype in another datatype

let c=1
let c1='1'
console.log(c+c1)