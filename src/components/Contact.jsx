import React from 'react'
import { Link } from 'react-scroll'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-full  bg-[#0a192f] flex flex-col justify-center items-center p-4'>
            <form action='https://getform.io/f/6cb93654-ce87-4be8-9226-bf2dac013c69' method='POST' className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#BD6513] text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>//Submit the form bellow or shoot me an email </p>
                </div>
                <input className='bg-[#ccd5f5] p-2' type='text' placeholder='Name' name='name' required />
                <input className='my-4 p-2 bg-[#ccd5f5]' type='email' placeholder='Email' name='email' required />
                <textarea className='bg-[#ccd5f5] p-2' name='message' rows="10" placeholder='Message'> </textarea>
                <button className='text-white border-2 hover:border-[#BD6513] hover:bg-[#BD6513] px-4 py-3 my-8 mx-auto flex items-center'>Let's cooraborate</button>
            </form>

        </div>
    )
}

export default Contact