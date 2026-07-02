import React, { useEffect, useState } from "react"

const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      )

      const data = await response.json()

      setUsers(data)
    }

    fetchUsers()
  }, [])

  return (
    <div>
      <h1>User List</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} — {user.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App