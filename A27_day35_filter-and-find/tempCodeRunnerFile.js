let arr=[
    {name:"gaurav",isPremium:false},
    {name:"singh",isPremium:true},
    {name:"rawat",isPremium:false},
    {name:"uv",isPremium:true},
]

let isPremium=arr.find(item=>item.isPremium)
console.log(isPremium)