//recursion:when function call itself

function great(n)
{
    if(n==6)
    {
        return
    }
    console.log("hola amigo kaise go theek ho")
    n++
    great(n)
}
great(1)


function hello(m)
{
    if(m==0)
    {
        return
    }
    console.log("chal chalke dikha")
    hello(--m)
}
hello(5)