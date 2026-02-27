//set are utility data structure
//set does not contain duplicate
//set are hetrogenous
//set are not ittrable
//time complexcity of set is O(1)

const myset=new Set()
myset.add("a") // adding new element in a set
myset.add("b")
myset.add("c")
myset.add("c")
myset.add("a")

console.log(myset,myset.size)

// myset.delete("b") //delete given value from a set if present
// console.log(myset)

// console.log(myset.has("c")) // check whether a value is present in a set and return boolean

// myset.clear() // remove all value from a set
// console.log(myset)



//in set we cannot perform loop
//somehow we can perform loop in a set

//first way of looping over set
myset.forEach(function(item){
    console.log(item)
})

//second way of looping over set
const arr=myset.entries()
console.log(arr)
for(let item of arr)
{
    console.log(item)
}

//third way of looping over set
const arr1=myset.values()
console.log(arr1)
for(let item of arr1)
{
    console.log(item)
}

