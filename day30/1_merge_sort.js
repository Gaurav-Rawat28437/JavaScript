let arr=[99,55,1,60,-10,0]
function merge2sorted(a1,a2)
{
let i=0
let j=0
let arr=[]
while(i<a1.length && j<a2.length)
{ 
    
    if(a1[i]<a2[j])
    {
         
          arr.push(a1[i])
          i++ 
       
    }
    else
    {
        
        arr.push(a2[j])
        j++
        
    }

    
}

// if(i<a1.length)
// {
//     for(i;i<a1.length;i++)
//     {
//         arr.push(a1[i])
//     }
// }
// else
// {
//     for(j;j<a2.length;j++)
//     {
//         arr.push(a1[j])
//     }
// }

while(i<a1.length)
{
    arr.push(a1[i])
    i++
}

while(j<a2.length)
{
    arr.push(a2[j])
    j++
}
return arr
}

function mergesort(arr)
{
    if(arr.length==1)return arr

    let mid=Math.floor(arr.length/2)-1
    let left=mergesort(arr.slice(0,mid+1))
    let right=mergesort(arr.slice(mid+1))
    return merge2sorted(left,right)
}
console.log(mergesort(arr))

