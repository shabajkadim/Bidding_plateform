import React, { useContext } from 'react'
import { AuthContext } from './context/AuthContext'

const Home = () => {
  const{state,LOGOUT}=useContext(AuthContext)
  return (
    <div>

      <h1>Home</h1>
      {/* <div>{state?.user?.firstname}</div> */}
    </div>
  )
}

export default Home
