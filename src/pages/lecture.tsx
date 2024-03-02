import Nav from '@/components/Nav';
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const Lecture = () => {

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [state, setState] = useState<any>();
    const [course, setCourse] = useState("");
    const [instructor, setInstructor] = useState("");
    const [date, setDate] = useState<any>();

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    useEffect(() => {

        const getAllLecture = async () => {
            const response = await fetch(`http://localhost:8080/api3/getAllLecture`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },

            });
            const instr = await response.json();
            setState(instr.lecture);
        };
        getAllLecture();
    }, []);


    const createNewLecture = async (e:any) => {
        e.preventDefault();
        setIsOpen(false);
        const response = await fetch(`http://localhost:8080/api3/createLecture`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "course":course, 
                "instructor": instructor,
                "date": date
            })
        });
        const instr = await response.json();
        
        if(instr.error){
            alert(instr.error)
        }
        
        window.location.reload();
    }


    return (
        <div className='h-screen bg-black px-10 pt-5'>
                <Nav/>
            <div className=''>
                <div className="flex pb-5 space-x-4 text-center">
                    <p className='text-2xl text-white font-bold '>All Lecture</p>
                    <button className='text-white px-2 py-1 bg-slate-400' onClick={openModal} >+</button>
                </div>
                <div className='grid grid-cols-4 gap-4'>
                    {state?.map((val: any, ind: any) => {
                        return (
                            <div className='text-white flex space-x-2  border-2 p-5' key={ind}>

                                <div>
                                    <p>{val.lectureNo}</p>
                                    <p >Course : {val.course}</p>
                                    <p>Instructor : {val.instructor}</p>
                                    <p >Date : {val.date.slice(0,10)}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                ariaHideApp={false}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <div className="mx-auto max-w-7xl">
                    <button className="text-3xl pb-10 font-bold" onClick={closeModal}>x</button>
                    <p className="pb-10 text-3xl">Add new lecture</p>
                    <form className=" mx-auto">
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" onChange={(e) => { setCourse(e.target.value) }} value={course}  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Course</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" onChange={(e) => { setInstructor(e.target.value) }} value={instructor}  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Instructor</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="Date" onChange={(e) => { setDate(e.target.value) }} value={date}  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Date</label>
                        </div>

                        <div className='pt-5 '>
                            <button className='bg-red-500 px-5 py-2 text-white font-bold' onClick={createNewLecture}>Submit</button>
                        </div>
                    </form>


                </div>

            </Modal>

        </div>
    )
}

export default Lecture