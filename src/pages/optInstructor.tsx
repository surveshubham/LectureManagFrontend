import Link from 'next/link'
import React from 'react'

const optInstructor = () => {
  return (
    <div className="bg-black">
    <main
      className={`grid grid-cols-2 grid-rows-1 max-w-7xl mx-auto place-items-center   min-h-screen  bg-black  `}
    >
      <Link href='/signup'>
      <div className="h-48 w-[400px] bg-white grid place-items-center cursor-pointer  rounded-lg">
              <p  className="text-2xl font-bold">SignUp</p>
      </div>
      </Link>
      <Link href='/login'>
      <div className="h-48 w-[400px] bg-white grid place-items-center cursor-pointer  rounded-lg">
              <p className="text-2xl font-bold">Login</p>
      </div>
      </Link>
      
    </main>
    </div>
  )
}

export default optInstructor