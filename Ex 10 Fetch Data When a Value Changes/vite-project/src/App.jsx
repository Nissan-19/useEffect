import React, { useEffect, useState } from "react"

const App = () => {
  const [userId, setUserId] = useState(1)
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    async function fetchUser() {
      try {
        setIsLoading(true)
        setError("")

        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        )

        if (!response.ok) {
          throw new Error("Failed to fetch user")
        }

        const data = await response.json()

        setUser(data)
      } catch (requestError) {
        console.error(requestError)
        setError("Something went wrong while loading the user")
      } finally {
        setIsLoading(false)
      }
    }

    fetchUser()
  }, [userId])

  function handleNextUser() {
    setUserId((previousUserId) => previousUserId + 1)
  }

  function handlePreviousUser() {
    if (userId === 1) {
      return
    }

    setUserId((previousUserId) => previousUserId - 1)
  }

  return (
    <div>
      <h1>Fetch User by ID</h1>

      <h2>User ID: {userId}</h2>

      <button
        onClick={handlePreviousUser}
        disabled={userId === 1}
      >
        Previous User
      </button>

      <button onClick={handleNextUser}>
        Next User
      </button>

      {isLoading && <p>Loading user...</p>}

      {error && <p>{error}</p>}

      {!isLoading && !error && user && (
        <div>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      )}
    </div>
  )
}

export default App