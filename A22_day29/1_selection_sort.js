//this is better than bubble sort
//selection sort: select minimum element index and swap it with i index
let arr=[100,50,25,-10,0,6] 
console.log(arr)

for(let i=0;i<arr.length-1;i++)
{
    
    let minIndex=i
    for(let j=i+1;j<arr.length;j++)
    {
        console.log("code chala")
        if(arr[j]<arr[minIndex]){
            minIndex=j
        }
    }

   if(i!=minIndex)
    {
     let temp=arr[minIndex]
    arr[minIndex]=arr[i]
    arr[i]=temp
    }
}
console.log(arr)