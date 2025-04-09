import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
const TypeWriter = () => {
  return (
    <div className='flex justify-center items-center  min-h-screen bg-gray-900'>
     <h1 className='text-4xl sm:text-5xl font-extrabold text-white px-4'>
     <span className='mr-2 whitespace-nowrap'>Hyy I am</span>
     <span className='text-yellow-400 inline-block  w-[800px]'>
        <Typewriter
        words={['MERN Stack Devloper','Next.js Devloper','UI/UX Designer','System Designer']}
        loop={0}
        cursor
        cursorStyle='|'
        typeSpeed={100}
        deleteSpeed={70}
        delaySpeed={1000}
        />
        </span>
      </h1>
    </div>
  )
}

export default TypeWriter
