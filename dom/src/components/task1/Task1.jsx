import { useEffect, useState } from "react"
import Users from "./Users"
import Form from "./Form"
import { toast } from "react-toastify"



const Task1 = () => {

  //checking for users data in local storage.
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || [])

  const removeUser = (id) => {
    const newArray = users.filter(item => item.id !== id)
    setUsers(newArray)
    toast.success('Deleted user successfully')
  }

  const updateUser = (id, NewUsername, NewPassword, NewEmail) => {
    const newArray = users.map(item => {
      if(item.id === id){
        return {id, username: NewUsername, password: NewPassword, email: NewEmail}
      }
      return item
    })
    setUsers(newArray)
    toast.success('Updated successfully')
  }

  const addUser = (user) => {
    setUsers(prev => [...prev, user])
    toast.success('Added user successfully')
  }


  const validateEmail = (email) => {
    let flag = 0
    users.map(item => {
      if(item.email === email){
        flag=1
      }
    })

    if(flag === 0){
      return true
    }
    return false
  } 

  //Saving in local storage whenever users state changes
  useEffect(() => {
    localStorage.setItem('users',JSON.stringify(users))
  },[users])

  return (
    <>
      <Form addUser={addUser} validateEmail={validateEmail} />
      <Users users={users} removeUser={removeUser} updateUser={updateUser} />
    </>
  )
  
}
export default Task1