import { type } from "os"
const {getAllUsers, add, remove, update, getFileData} = require('./modules/crud')


// const data = fs.readFileSync('./files/input.txt', {encoding: 'utf-8'})
// console.log(JSON.parse(data))

//Funcitons in curd.ts


add({id: Date.now(),name:'sanjay', age:20})
remove(1695195844658)
update(1695196136390, {age:18})
getAllUsers()