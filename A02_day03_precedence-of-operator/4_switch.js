// //check days
// let a=3
// switch(a)
// {
//     case 1:
//         console.log("Monday")
//         break;
    
//     case 2:
//         console.log("Tuesday")
//         break;
    
//     case 3:
//         console.log("wednesday")
//         break;
    
//     case 4:
//         console.log("thursday")
//         break;
        
//     case 5:
//         console.log("Friday")
//         break;
    
//     case 6:
//         console.log("Saturday")
//         break;
        
//     case 7:
//         console.log("Sunday")
//         break;
    
//         default:
//         console.log("Invalid Input")
// }


// //check adult or child
// let age=17
 
// switch(age>=18)
// {
//     case true:
//         console.log("Adult")
//         break;
    
//     case false:
//         console.log("Child")
//         break;

// }

//check even or odd and positive or negative
let num=28

switch(num%2==0 )
{
    case true:
        switch(num<0)
        {
            case true:
                console.log("Even, Negative")
                break;
            
            case false:
                console.log("Even,Positive")
                break;
        }
        
    case false:
        switch(num<0)
        {
            case true:
                console.log("Odd, Negative")
                break;
            
            case false:
                console.log("Odd,Positive")
                break;
        }
}



// let month=12
// switch(month)
// {
//         case 1:console.log("31"); break;
//         case 2:console.log("28"); break;
//         case 3:console.log("31"); break;
//         case 4:console.log("30"); break;
//         case 5:console.log("31"); break;
//         case 6:console.log("30"); break;
//         case 7:console.log("31"); break;
//         case 8:console.log("31"); break;
//         case 9:console.log("30"); break;
//         case 10:console.log("31"); break;
//         case 11:console.log("30"); break;
//         case 12:console.log("31"); break;

// }