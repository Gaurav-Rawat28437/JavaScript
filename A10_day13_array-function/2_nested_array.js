let arr=[1,2,3,4,5,6,[10,11,12,13,14,[20,21,22,23,[]]]]
console.log(arr[6][5][2])

let flatarr=arr.flat(Infinity)
console.log(flatarr)