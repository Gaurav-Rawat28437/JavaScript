//array sorted in accending order
let arr=[-10,1,11,22,54,101]
let target=101

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



//array sorted in decending order
let arr1=[100,90,80,70,60,50,40]
let target1=80

function binarySearch(arr1,target1)
{
    let si=0
    let ei=arr1.length-1

    while(si<=ei)
    {
        
        let mid=Math.floor((si+ei)/2)

        if(arr1[mid]==target1)
        {
            return mid
        }
        else if(target1>arr1[mid])
        {
            ei=mid-1
        }
        else
        {
            si=mid+1
        }
    }
    return -1
}

console.log(binarySearch(arr1,target1))