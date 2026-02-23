// print square of star "*" with user input



// let n=Number(prompt("enter the number"))
// for(let j=1;j<=n;j++)
//     {
//        let ans=""
//        for(let i=1;i<=n;i++)
//         {
//             ans=ans+"* "
//         }
//         console.log(ans)

//     }

 

// //print table form 2 to 10

// for(let i=2;i<=10;i++){
//     for(let j=1;j<=10;j++){
//         console.log(`${i} x ${j} = ${i*j}`)
//     }
// }




// //take 2 input from user to make rectangle of stars

// let side1=Number(prompt("enter the side 1"))
// let side2=Number(prompt("enter the side 2"))
// for(let j=1;j<=side1;j++)
//     {
//        let ans=""
//     for(let i=1;i<=side2;i++)
//         {
//             ans=ans+"* "
//         }
//         console.log(ans)
    
//     }




// //make rightangle triangle of star

// let n=Number(prompt("enter the number"))

// for(let i=1;i<=n;i++){

//     let str=""
//     for(let j=1;j<=i;j++){
//         str=str+"* "
//     }
//     console.log(str)
// }



////print inverted right triangle
//  let n=5

// for(let i=1;i<=n;i++){
//     let str =""
//     for (let j=1;j<=n-i;j++){
//         str+="  "
//     }
//     for (let k=1;k<=i;k++){
//         str+="* "
//     }
//     console.log(str)
// }


//print diamond
let n=5//Number(prompt("enter the number"))

let space=Math.floor(n/2)
let star=1

for(let i =1 ;i<=n ; i++)
{
    let str=""
    for(let j=1; j<=space; j++)
    {
        str+=" "
    }

    for(let j=1;j<=j;j++){
        str+="*"
    }
    console.log(str)

    if(i<=space){
        space--
        star+=2
    }
    else{
        space ++
        star-=2
    }
}
