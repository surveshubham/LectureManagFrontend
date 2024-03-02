
import React, { useEffect, useState } from 'react'
import web from "../../public/profile.webp"
import Image from 'next/image';
import Nav from '@/components/Nav';
const instructors = () => {

    const [state, setState] = useState<any>();

    useEffect(() => {

        const getAllInstructor = async () => {
            const response = await fetch(`http://localhost:8080/api/getAllInstructor`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },

            });
            const instr = await response.json();
            setState(instr.user);
        };
        getAllInstructor();
    }, []);


    return (
        <div className='h-screen bg-black px-10 pt-5'>
                <Nav/>
            <div className=''>
             <p className='text-2xl text-white font-bold pb-5'>All Instructors</p>
            {state?.map((val: any, ind: any) => {
                return (
                    <div className='text-white flex space-x-2 py-2  ' key={ind}>
                        <div className='overflow-hidden rounded-2xl'>
                            <Image src={web} className='' height={10} width={50} alt={''} />
                        </div>
                        <div>
                            <p >{val.name}</p>
                            <p >{val.email}</p>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )

}

export default instructors