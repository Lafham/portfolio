import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            {/* container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#BD6513]'>Hi, My name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Mohamed LAFHAM</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack developer</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>My passion for the Web and new technologies led me to pursue my studies in the field of "information systems engineering". I'm currently studying to become a design and development engineer at the Faculty of Science.
                    I'm a social person, which enables me to adapt easily and not have problems working in groups.
                    I'm able to manage stress and find solutions to any problems that arise.
                    I'm curious, I like to learn new technologies which help me to enrich my knowledge and develop my skills and be much more creative.</p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#BD6513] hover:border-[#BD6513]'>
                    <Link to='projects' smooth={true} duration={500} >
                        View Projects
                    </Link>                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Home