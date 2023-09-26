import User from "./User"

const Users = ({users, removeUser, updateUser}) => {

    if(!users.length){
        return 
    }

  return (
    <div className="w-2/3 bg-dark-gry mx-auto rounded-md p-8 mb-16">
      <h1 className="text-white text-center text-4xl">Users</h1>
      <div className="flex flex-col gap-6 mt-16">
        {users.map((item) => (
          <User key={item.id} {...item} removeUser={removeUser} updateUser={updateUser}/>
        ))}
      </div>
    </div>
  )
}
export default Users