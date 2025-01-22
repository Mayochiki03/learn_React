import { useState } from "react"
import Login from "./components/Login"
import Profile from "./components/Profile"
import User from "./types/User"
import './App.css'

function App() {
  const [user, setUser] = useState<User | null>(null)

  return (
    <div>
      <Login user={user} setUser={setUser} />
      <Profile user={user} setUser={setUser} /> 
    </div>
  )
}

export default App