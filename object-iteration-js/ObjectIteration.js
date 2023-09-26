let users = [
  {
    id: 1,
    name: "sanjay",
    active: true,
    interests: ["web development", "Dance", "Coding"],
    address: {
      permanent: "Chennai",
      temporary: "USA",
    },
  },
  {
    id: 2,
    name: "Kumar",
    active: false,
    interests: ["web development", "Dance", "Coding"],
    address: {
      permanent: "Chennai",
      temporary: "USA",
    },
  },
  {
    id: 3,
    name: "Beboy",
    active: true,
    interests: ["web development", "Dance", "Coding"],
    address: {
      permanent: "Chennai",
      temporary: "USA",
    },
  },
]

const PrintDetails = (user) => {
  Object.entries(user).map((entry) => {
    // console.log(entry[0], entry[1])
    const key = entry[0]
    const value = entry[1]

    // console.log(typeof entry[1])

    if (
      typeof value === "number" ||
      typeof value === "string" ||
      typeof value === "boolean"
    ) {
      console.log(`${key} = ${value}`)
    }

    if (Array.isArray(value)) {
      // value.map(item => console.log(item))
      console.log(value.join("||"))
    }

    if (typeof value === "object" && !Array.isArray(value)) {
      const arr = []
      Object.entries(value).map((item) => {
        const key = item[0]
        const value = item[1]

        arr.push(`${key} = ${value}`)
      })
      console.log(arr.join("||"))
    }
  })
}

users.map((user) => {
  PrintDetails(user)
  console.log("\n")
})
