





//binary search:in 0 and 1 (arrya should be sorted)

let arr=[10,11,12,13,14,15,17,18,19,20]
let target=17

function binaryseach(arr,target)
{
    let si=0
    let ei=arr.length-1

    while(si<=ei)
    {
        
        let mid=Math.floor((si+ei)/2)

        if(arr[mid]==target)
        {
            return mid
        }
        else if(target>arr[mid])
        {
            si=mid+1
        }
        else
        {
            ei=mid-1
        }
    }
    return -1
}
console.log(binaryseach(arr,target))