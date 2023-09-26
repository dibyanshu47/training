
const fs = require('fs')
const { v4: uuid } = require("uuid")
type userData = {
  users: userWithID[]
}

type userWithID = {
  id: number
} & User

type User = {
  // id: number
  name: string
  age: number
}

type UpdateData = {
  name?: string
  age?: number
}

const getFileData = ():userData => {
    let fileData = fs.readFileSync('./files/input.txt', {encoding: 'utf-8'})
    fileData = JSON.parse(fileData)
    return fileData
}


const add = (data:User):void => {
    
    const id = uuid()
    const newUser = {id, ...data}
    let fileData:userData = getFileData()
    fileData.users.push(newUser)

    fs.writeFileSync('./files/input.txt', JSON.stringify(fileData))
}

const remove = (id:number):void => {
    let fileData: userData = getFileData()

    const isValid = fileData.users.find((item:userWithID) => item.id === id)
    console.log(isValid)

    if(isValid){
        const newArray = fileData.users.filter((item:userWithID) => item.id !== id)
        fileData.users = newArray
        fs.writeFileSync("./files/input.txt", JSON.stringify(fileData))
    }

}   

const update = (id:number, data:UpdateData):void => {
    let fileData: userData = getFileData()

    const isValid = fileData.users.find((item: userWithID) => item.id === id)

    if(isValid){

        const ind = fileData.users.indexOf(isValid)

        if(data.name){
            fileData.users[ind].name = data.name
        }
        if(data.age){
            fileData.users[ind].age = data.age
        }

        fs.writeFileSync("./files/input.txt", JSON.stringify(fileData))
        
    }

}

const getAllUsers = () => {
    let fileData: userData = getFileData()
    console.log(fileData.users)
}

module.exports = {getFileData, add, remove, update, getAllUsers}