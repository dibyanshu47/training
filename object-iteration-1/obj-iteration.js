const array = [
    {
        id:1,
        name:'sanjay',
        age:20
    },
    {
        id:2,
        name:'kumar',
        age:30
    },
    {
        id:3,
        name:'beboy',
        age:55
    },
    {
        id:4,
        name:'kumar',
        age:61
    },
    {
        id:1,
        name:'Virat',
        age:90
    },
]

//map

array.map(item => {
    console.log(item.id)
    console.log(item.name)
    console.log(item.age)
})


//for each

array.forEach(item => {
    console.log(item.id)
    console.log(item.name)
    console.log(item.age)
})

//for loop

for(let i of array){
    console.log(i.id)
    console.log(i.age)
    console.log(i.name)
}