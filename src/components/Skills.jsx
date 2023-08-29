import React from 'react'
import angular from '../assets/angular.png'
import css from '../assets/css.png'
import github from '../assets/github.png'
import html from '../assets/html.png'
import java from '../assets/java.png'
import js from '../assets/js.png'
import laravel from '../assets/laravel.png'
import mysql from '../assets/mysql.png'
import php from '../assets/php.png'
import postgres from '../assets/postgres.png'
import react from '../assets/react.png'
import springboot from '../assets/springboot.png'
import docker from '../assets/docker.png'
import tailwind from '../assets/tailwind.png'


const Skills = () => {
    return (
        <div name='skills' className='w-full  bg-[#0a192f] text-gray-300'>
            {/* container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4  border-[#BD6513] '>Skills</p>
                    <p className='py-4'>// These are the technologies I've worked with</p>
                </div>
                <div className='w-full grid grid-cols-4 sm:grid-cols-3 gap-5 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto py-8' src={html} alt='html icon' />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto py-8' src={css} alt='css icon' />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto py-8' src={js} alt='js icon' />
                        <p className='my-4'>Java Script</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto py-8' src={java} alt='java icon' />
                        <p className='my-4'>Java</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto py-8' src={springboot} alt='spring boot icon' />
                        <p className='my-4'>Spring Boot</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto py-8' src={react} alt='react icon' />
                        <p className='my-4'>React</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto py-8' src={angular} alt='angular icon' />
                        <p className='my-4'>Angular</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto py-8' src={php} alt='php icon' />
                        <p className='my-4'>PHP</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto py-8' src={laravel} alt='laravel icon' />
                        <p className='my-4'>Laravel</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto py-8' src={tailwind} alt='tailwind icon' />
                        <p className='my-4'>Tailwind</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto py-8' src={github} alt='github icon' />
                        <p className='my-4'>GitHub</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto py-8 ' src={mysql} alt='mysql icon' />
                        <p className='my-4'>MySql</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto py-8' src={postgres} alt='postgres icon' />
                        <p className='my-4'>PostgreSql</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto py-8' src={docker} alt='docker icon' />
                        <p className='my-4'>Docker</p>
                    </div>
                </div>


            </div>
            <div></div>
        </div>
    )
}

export default Skills