import React from 'react'
import {assets} from '../assets/assets'
import { motion } from "motion/react"


const About=()=> {
  return (
    <motion.div 

    initial={{opacity:0,x:100}}
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}}
        viewport={{once:true}}
        
    className='flex flex-col items-center justify-center
    cointainer mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden '
    id="About">
      <h1 className='text-2xl sm:text-4xl md:text-4xl font-bold mb-2'>About <span
      className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'>Passonate About Properties ,Dedicate to your Vision</p>
      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
       <img src={assets.brand_img} alt=""  className='w-full sm:w-1/2 max-w-lg'/>
      <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
       <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
          <div>
           <p className='text-4xl font-medium text-gray-800'>15+</p>
           <p> Years of Excellence</p>
          </div>
          <div>
           <p className='text-4xl font-medium text-gray-800'>50+</p>
           <p> Projects Completed</p>
          </div>
          <div>
           <p className='text-4xl font-medium text-gray-800'>35000+</p>
           <p> Mn. sq. Ft. Delivered</p>
          </div>
          <div>
           <p className='text-4xl font-medium text-gray-800'>23+</p>
           <p> Ongoing Projects</p>
          </div>
         </div>
         <p className='my-10 max-w-lg'>When you are hoping to attract potential buyers,
           it's essential to be available for their quick questions and 
           other inquiries. With an automated text responder,
           you can ensure that you don't lose any real estate leads because of a showing or a meeting 
           with another client. Here are some sample templates to use when setting up a campaign 
           for buyer leads.
         </p>
         <button className='bg-blue-500 text-white px-8 py-2 rounded'>Learn More</button>
       </div>
      </div>
    </motion.div >
  )
}

export default About