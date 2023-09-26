import {v4 as uuidv4} from 'uuid'
import {  toast } from "react-toastify"
import User from "./proto/Prototypes"

const Form = ({addUser, validateEmail}) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target[0].value)

        if(!validateEmail(e.target[1].value)){
          toast.error('Email already in use')
          return
        }
        
        const newUser = new User(
          uuidv4(),
          e.target[0].value,
          e.target[2].value,
          e.target[1].value
        )

        // addUser({id:uuidv4(), username: e.target[0].value,email: e.target[1].value, password: e.target[2].value})
        addUser(newUser)
        e.target[0].value = ''
        e.target[1].value = ''
        e.target[2].value = ''
    }

  return (
    <div className="my-16 bg-dark-gry rounded-md p-12 w-2/3 lg:w-1/3 mx-auto">
      <h1 className="text-white text-4xl text-center mb-8">User Form</h1>
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" required />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" required />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
        </div>

        <button className="bg-orange-500 mt-2" type="submit">
          Add User
        </button>
      </form>
    </div>
  )
}
export default Form