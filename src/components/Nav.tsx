import Link from 'next/link'
import React, { useState } from 'react'

const Nav = () => {
    const [page,setPage] = useState("instructor")
    
    return (
        <div className="flex space-x-3   pt-5 pb-10">
            <Link  className="p-2 bg-white" href="/">Home</Link>
            <Link className="p-2 bg-white" href={'/instructors'}>instructors</Link>
            <Link className="p-2 bg-white" href={'/courses'} >Courses</Link>
            <Link className="p-2 bg-white"  href={'/lecture'} >Lectures</Link>
           
        </div>
    )
}

export default Nav