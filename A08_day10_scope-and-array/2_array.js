//array is list or collection of data
//array is js are hetrogenous(array in js can contain multiple datatype)
//element are saprated by (,) commas

let arr=[2,"uv", true,3.5,"gaurav",5] 
console.log(arr)
let arr1= Array(1,2,3)
console.log(arr1)

//length of an array
console.log(arr.length)

//array index start with 0 and goes to length-1
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i])
}

//for of loop applied only array
for(let item of arr1){
    console.log(item)
}