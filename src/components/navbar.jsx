import React, { useState } from 'react'
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/logo.png'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center bg-[#0a192f] text-gray-300'>
            <div>
                <Link to='home' smooth={true} duration={500} >

                    <img src={Logo} alt='mohamed lafham logo' style={{ width: '180px' }} />
                </Link>
            </div>

            {/* menu */}

            <ul className='hidden md:flex'>
                <li>
                    <Link to='home' smooth={true} duration={500} >
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='about' smooth={true} duration={500} >
                        About
                    </Link>
                </li>
                <li>
                    <Link to='skills' smooth={true} duration={500} >
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to='projects' smooth={true} duration={500} >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={500} >
                        Contact
                    </Link>
                </li>
            </ul>



            {/* humburger menu */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>


            {/* Mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={500} >
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='about' smooth={true} duration={500} >
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500} >
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='projects' smooth={true} duration={500} >
                        Projects
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500} >
                        Contact
                    </Link>
                </li>
            </ul>
            {/* social media icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600' >
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href='https://www.linkedin.com/in/mohamed-lafham/'>
                            Linkedin <FaLinkedin size={25} />
                        </a>
                    </li>
                    <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]' >
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href='https://github.com/Lafham'>
                            Github <FaGithub size={25} />
                        </a>
                    </li>
                    <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#C13584]' >
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href='https://www.instagram.com/simo.lafham/'>
                            Instagram <FaInstagram size={25} />
                        </a>
                    </li>
                    <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]' >
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href='mailto:lafham.mohamed@gmail.com'>
                            Email <HiOutlineMail size={25} />
                        </a>
                    </li>
                    <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]' >
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href='/'>
                            CV <BsFillPersonLinesFill size={25} />
                        </a>
                    </li>
                </ul>
            </div>


        </div>

    )
}

export default Navbar