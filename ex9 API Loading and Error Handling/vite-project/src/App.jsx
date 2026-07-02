import React, { useEffect, useState } from "react"

const App = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        )

        if (!response.ok) {
          throw new Error("Failed to fetch users")
        }

        const data = await response.json()

        setUsers(data)
      } catch (requestError) {
        console.error(requestError)
        setError("Something went wrong while loading users")
      } finally {
        setIsLoading(false)
      }
    }

    fetchUsers()
  }, [])

  if (isLoading) {
    return <h2>Loading users...</h2>
  }

  if (error) {
    return <h2>{error}</h2>
  }

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