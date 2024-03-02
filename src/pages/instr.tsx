import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const instr = () => {

    const [state,setState] = useState<any>();
    const { push } = useRouter();
    useEffect(() => {

        let email = localStorage.getItem('email'); 
       if(email == null){
               push("/login")
       }
        
        const getLecture = async () => {
            const response = await fetch(`http://localhost:8080/api/getAlllecture`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "email": email
                })
            });
            const instr = await response.json();
            setState(instr.user[0]);
        };
        getLecture();
    }, []);

   

    return (
   
        <div className='p-10 bg-black text-white h-screen'>
             <p>Welcome {state?.name}</p>
            <div className="flex py-5 space-x-4 text-center">
               
                <p className='text-2xl text-white font-bold '>Your Lecture</p>
            </div>
            {state?.newfields.length > 0 ? <><div className='grid grid-cols-4 gap-4'>
                {state?.newfields.map((val: any, ind: any) => {
                    return (
                        <div className='text-white flex space-x-2  border-2 p-5' key={ind}>

                            <div>
                                <p>{val.lectureNo}</p>
                                <p >Course : {val.course}</p>
                                <p>Instructor : {val.instructor}</p>
                                <p >Date : {val.date.slice(0, 10)}</p>
                            </div>
                        </div>
                    )
                })}
            </div></> : <>
               <p className='text-3xl'>Currently you have no lecture assign</p>
            </>}
            
        </div>
    )
}

export default instr


