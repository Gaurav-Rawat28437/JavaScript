let a1=[1,3,4,5,6,100]
let a2=[1,2,7,99]


function merge2sorted(a1,a2)
{
        let i=0
        let j=0
        let arr=[]
        while(i<a1.length && j<a2.length)
        { 
            
            if(a1[i]<a2[j])
            {
                
                arr.push(a1[i])
                i++ 
            
            }
            else
            {
                
                arr.push(a2[j])
                j++
                
            }

            
        }

        // if(i<a1.length)
        // {
        //     for(i;i<a1.length;i++)
        //     {
        //         arr.push(a1[i])
        //     }
        // }
        // else
        // {
        //     for(j;j<a2.length;j++)
        //     {
        //         arr.push(a1[j])
        //     }
        // }

        while(i<a1.length)
        {
            arr.push(a1[i])
            i++
        }

        while(j<a2.length)
        {
            arr.push(a2[j])
            j++
        }
        
    return arr
}
console.log(merge2sorted(a1,a2))
