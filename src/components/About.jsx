import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4 '>
                    <p className='text-4xl font-bold inline border-b-4 border-[#BD6513]'>About</p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi. I'm Mohamed, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p>My passion for the Web and new technologies led me to pursue my studies in the field of "information systems engineering".
                    I'm currently studying to become a design and development engineer at the Faculty of Science. 
                    I'm a social person, which enables me to adapt easily and not have problems working in groups. 
                    I'm able to manage stress and find solutions to any problems that arise. I'm curious, I like to learn new technologies which help me to enrich my knowledge and develop my skills and be much more creative.</p>
                </div>

            </div>

        </div>
    
    </div>
  )
}

export default About