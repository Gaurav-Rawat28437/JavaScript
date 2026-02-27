let arr=[8,3,5,2,6,4]

for(let i=1;i<arr.length-1;i++)
{
    let j=i+1
    while(j>0 && arr[j]<arr[j-1])
    { console.log("loop chala")
        
        let temp=arr[j-1]
        arr[j-1]=arr[j]
        arr[j]=temp
        j--
    }



}
console.log(arr)