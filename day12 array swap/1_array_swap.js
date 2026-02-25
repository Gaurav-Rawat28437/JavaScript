let arr=[1,2,3,4,5,6]


// let newarray=[]
// for(let i=arr.length-1;i>=0;i--)
// {
//     newarray.push(arr[i])
// }

// console.log(newarray)


// for(let item of arr)
// {
//     newarray.unshift(item)
// }
// console.log(newarray)


for(let i=0;i<Math.floor(arr.length/2);i++)
{
     let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = temp
}

console.log(arr)
