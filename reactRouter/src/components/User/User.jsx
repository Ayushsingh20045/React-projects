import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const {userid}=useParams()
  return (
    <div className='w-full h-[50vh] text-3xl flex items-center justify-center '>
    Welcome to my website :{userid}
    </div>
  )
}

export default User
