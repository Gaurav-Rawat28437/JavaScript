let n=-58
if(n%2==0){
    
    if(n<0){
        console.log("Even,negative")
    }
    else if(n>0){
        console.log("Even,positive")
    }
    else{
        console.log("ZERO")
    }
}
else{
    if(n<0){
        console.log("Even,negative")
    }
    else if(n>0){
        console.log("Even,positive")
    }
    else{
        console.log("ZERO")
    }
}

//check person is allow to drive or not
let age=22
let hasDriveLicence=false

if(age>=18){

    if(hasDriveLicence==true){
        console.log("can drive")
    }
    else{
        console.log("cannot drive")
    }
}
else{
    console.log("cannot drive")
}

//check how much discount a person get also check if it is male or female
let age1=20
let gender="M"
if(age1<=10){
       console.log("underage")
}
else if(age1>10 && age1<=22){
   if(gender=="M"){
    console.log("30%")
   }
   else{
    console.log("15%")
   }
}
else{
console.log("10%")
}