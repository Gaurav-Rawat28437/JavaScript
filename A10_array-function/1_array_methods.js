// let ar=[2,3,4,5,6]
// ar.fill(-1,0,3) // it will change the value from starting index to ending index
// console.log(ar)

// let arr=[1,2,3,4,5]
// let arr2=[10,11,12,13,14,15]

// let val=arr.concat(arr2) // merge second array in first array and return new copy of data
// console.log(val)

// let val2=arr2.concat(arr)// merge first array in second array and return new copy of data
// console.log(val2)

// let val3=arr.includes(-1) // check element is present in array of not and return ans in boolean
// console.log(val3)

// let arr3=[1,2,3,4,5,6,7,8,9,10]
// let val4=arr3.slice(2,6) // print element from staring index to ending index but ending index element is not included
// console.log(val4)
// let val5=arr3.slice(-5,-2) // negative index is possible
// console.log(val5)


let arr5=[10,11,12,13,14,15,16,17]
console.log(arr5)
let val6=arr5.splice(3,5) //it will remove element ,strating index and how many element you want to remove (3 is starting inex , 5 is number of element and it include staring index element)
console.log(val6)
console.log(arr5) // it is destructive,it will remove the element from original array
