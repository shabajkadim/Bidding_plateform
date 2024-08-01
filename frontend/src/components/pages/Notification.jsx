import React from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'



const Notification = () => {

  const navigate=useNavigate()

  ;

  // const handleTime=()=>{
  //   navigate('/')
  // }

  const handleMessage=()=>{
    toast("No Notifications ")
    setTimeout(() => {
      navigate('/')
    },3000)
  }
  
  
  return (
    <div className="max-w-sm mx-auto mt-6 mb-[140px] md:mb-[210px] p-4 bg-white border border-gray-200 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Notification</h2>
      <p className="text-gray-600">You have new notifications. Check them out to stay updated!</p>
      <button onClick={handleMessage} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
        View Notifications
      </button>
    </div>
  )
}

export default Notification








