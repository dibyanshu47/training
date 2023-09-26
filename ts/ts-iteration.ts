type common = {
  name: string
  age: number
}

type User = {
  userName: string
} & common

interface Admin extends common {
  role: string
}

const sanjay: Admin = {
  name: "sanjay",
  age: 20,
  role: "Engineer",
}

const dibyanshu: User = {
  name: "dibyanshu",
  age: 21,
  userName: "uname",
}

// console.log(sanjay)
// console.log(dibyanshu)

let userArray: (Admin | User)[] = []

userArray.push(sanjay)
userArray.push(dibyanshu)

// console.log(userArray)

let users: User[] = []
let admins: Admin[] = []

const isAdmin = (data: User | Admin): data is Admin => {
  return (data as Admin).role !== undefined
}

for (let i = 0; i < userArray.length; i++) {
  let data = userArray[i]
  if (isAdmin(data)) {
    admins.push(data)
  } else {
    users.push(data)
  }
}

console.log(users)
console.log(admins)
