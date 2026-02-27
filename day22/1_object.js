let user={
    name:"gaurav",
    age:20,
    city:"delhi",
    country:"India",
    hasHisOwnCar:true
}

console.log(user["age"])
console.log(user.city)

const{name,age,city:place,country,hasHisOwnCar:hasCar}=user // city:place means the value of city goes to place variable if you call city its value does not print if ypu want to print its value you have to call place
console.log(name)
console.log(country)
console.log(place)
// console.log(hasHisOwnCar) gives erroe
console.log(hasCar)