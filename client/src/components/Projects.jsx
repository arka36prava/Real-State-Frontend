import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'
import { motion } from "motion/react"

const Projects=()=> {

 const duplicatedProjects = [...projectsData, ...projectsData];

  return (
    <motion.div

    initial={{opacity:0,x:-200}}
        transition={{duration:1.2}}
        whileInView={{opacity:1,x:0}}
        viewport={{once:true}}

        
    className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32
    my-20 w-full overflow-hidden' id='Projects'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects 
            <span className='underline underline-offset-4 decoration-1 under
        font-light '>Completed</span></h1>
        <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>
             Crafting Space,Building Legacie Exploring our portfolio
        </p>

        { /* Projects slider container */}
        <div className="overflow-hidden w-full">
  <div className="flex gap-4 animate-scroll">

    {[...projectsData, ...projectsData].map((project, index) => (
      <div
        key={index}
        className="relative flex-shrink-0 w-[280px]"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[280px] object-cover mb-14"
        />

        <div className="absolute left-0 right-0 bottom-5 flex justify-center">
          <div className="bg-white w-3/4 px-4 py-2 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">
              {project.title}
            </h2>
            <p className="text-gray-500 text-sm">
              {project.price} | {project.location}
            </p>
          </div>
        </div>
      </div>
    ))}

  </div>
</div>
        
    </motion.div>
  )
}

export default Projects