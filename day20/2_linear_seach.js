//linear serch: code goes in straight

let arr=[11,12,1,31,4,15]
let target=155
function linearsearch(arr,target)
{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]==target)
        {
            return i
        }
    }
    return -1
}

console.log(linearsearch(arr,target))

let str="abcdefgh"
let target1="d"

function linearsearch1(str,target1)
{
    for(let i=0;i<str.length;i++)
    {
        if(str.charAt(i)==target1)
        // if(str[i]==target)
        {
            return i
        }
    }

    return -1
}
console.log(linearsearch1(str,target1))