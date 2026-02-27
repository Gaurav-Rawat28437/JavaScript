//bubble sort
let arr=[6,2,4,5,1,3]


// //code is worst (will always run upto(n-1)**2)
// for(let i=0;i<arr.length-1;i++)
// {
//     for(let j=0;j<arr.length-1;j++)
//     {
//         if(arr[j] < arr[j+1])
//         {
//             let temp=arr[j]
//             arr[j]=arr[j+1]
//             arr[j+1]=temp
//         }
//     }
// }
// console.log(arr) //time complexcity of this code is O(N**2)

// //code is better optimize (will run lot than (n-1)**2)
// for(let i=0;i<arr.length-1;i++)
// {
//     for(let j=0;j<arr.length-1-i;j++)
//     {
//         if(arr[j] < arr[j+1])
//         {
//             let temp=arr[j]
//             arr[j]=arr[j+1]
//             arr[j+1]=temp
//         }
//     }
// }
// console.log(arr) //time complexcity of this code is O(N**2)

//code is best optimize (break the code if no swap happened)
for(let i=0;i<arr.length-1;i++)
{
    let isSorted=true
    for(let j=0;j<arr.length-1-i;j++)
    {
        
        if(arr[j] > arr[j+1])
        {
            let temp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
            isSorted=false
        }
    }

    if(isSorted==true)
    {
        break
    }
}
console.log(arr) //time complexcity of this code is O(N)
