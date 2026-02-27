//JSON:javascript objects notation
//JSON
//won't work for function, undefin,ed, etc
let arr=[{name:"gaurav"},{name:"singh"},{name:"rawat"}]
let dataFromBackend=JSON.stringify(arr) // it change the data into string(arrays of object change into sring)
console.log(dataFromBackend)
console.log(typeof(dataFromBackend))
let originalData=JSON.parse(dataFromBackend)
console.log(originalData)
console.log(typeof(originalData))
//with the help of JSON we can copy 

let arr2=JSON.parse(JSON.stringify(arr))
arr2[0].name="uv"
console.log(arr2)