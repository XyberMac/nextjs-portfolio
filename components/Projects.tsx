import React from 'react'
import Title from './Title'
import { ProjectDetails } from '@/data'
import Link from 'next/link'

export default function Projects() {
  return (
    <div id='projects' className='py-20 bg-indigo-950'>
      <Title image='/projects-pic.png'/>
      <div className="flex flex-wrap gap-20 items-center justify-center max-[540px]:flex-col">
        {ProjectDetails.map((project)=>(
            <div key={project.id} className="flex flex-col w-[40%] max-[540px]:w-[70%] max-[470px]:w-[95%] h-[500px] bg-slate-800 shadow-lg shadow-slate-950 p-[30px] rounded-md items-center justify-around">
            <h1 className="w-full font-bold text-xl">{project.title}</h1>
            <p className="text-sm w-full font-semibold text-purple-300">{project.description}</p>
            <div className="w-full h-[50%]">
                <img src={project.image} className='w-full cursor-pointer h-full rounded-md transition duration-500 hover:scale-110' alt="" />
            </div>
            <div className="w-full flex items-center justify-evenly max-[980px]:flex-col">
            <Link href="#contact" className='w-[35%] border-[1px solid slate-500] text-center bg-slate-900 p-3 rounded-md transition duration-500 hover:scale-110 max-[980px]:w-[70%] font-semibold my-2 hover:bg-violet-700 text-purple-200 max-[1140px]:text-sm'>Get yours now</Link>
            <Link href={project.link} className='w-[35%] border-[1px solid slate-500] text-center bg-slate-900 p-3 rounded-md transition duration-500 hover:scale-110 hover:bg-violet-700 max-[980px]:w-[70%] font-semibold my-2 text-purple-200'>Live demo</Link>
            </div>
        </div>
        ))}
        
      </div>
    </div>
  )
}
