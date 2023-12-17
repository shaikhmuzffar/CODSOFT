import React from 'react'
import Button from '../Ui components/Button'

// images 
import heroImg from '../assets/heroImg.png'
import heroMobileImg from '../assets/heroMobileImg.png'
import behance from '../assets/behance.png'
import instagram from '../assets/instagramSolid.png'
import linkedIn from '../assets/linkedinSolid.png'
import twitter from '../assets/twitterSolid.png'
import resumeIconB from '../assets/resumeIconBlack.png'

export default function Hero() {
  return (
    <section className='mt-[90px] md:mt-[120px] font-mulish' >
      <div className='grid grid-cols-12 gap-y-[90px]  sm:gap-y-[80px] md:gap-y-0 ' >
        {/* heroInffo */}
        <div className='col-span-12 md:col-span-6  flex flex-col gap-y-14 sm:gap-y-16 lg:gap-y-16' >
          {/* tagline and title  */}
          <div className='flex flex-col gap-y-12 sm md:gap-y-11' >

            {/* titles and userActions */}
            <div className='flex items-center md:items-start text-center md:text-left  flex-col gap-y-1'>
              {/* tagline */}
              <div className='px-3 py-[3px] bg-myOrange w-fit rounded opacity-70 '>
                <p className='text-base md:text-xs text-white' >Hello, i'm muzaffar shaikh</p>
              </div>
              {/* titles */}
              <div className='flex flex-col gap-1 mt-4 ' >
                <h1 className='text-[40px] sm:text-[48px] md:text-[40px] lg:text-[48px] font-[800] leading-[50px] sm:leading-[65px] md:leading-[55px] lg:leading-[60px]' >Professional</h1>
                <h1 className='text-[40px] sm:text-[48px] md:text-[40px] lg:text-[48px] font-[800] leading-[50px] sm:leading-[65px] md:leading-[55px] lg:leading-[60px]' >UI/UX Designer</h1>
                <h1 className='text-[40px] sm:text-[48px] md:text-[40px] lg:text-[48px] font-[800] leading-[50px] sm:leading-[65px] md:leading-[55px]lg:leading-[60px]' >& Web Developer</h1>
              </div>
            </div>
            {/* userActions */}
            <div className='flex flex-col sm:flex-row sm:justify-center md:justify-start items-center gap-8 sm:gap-16 md:gap-10 '>
              <div className='scale-125 sm:scale-100 ' >
                <Button>
                  Explore
                </Button>
              </div>
              {/* <a className='hidden md:block text-myBlue text-base leading-4 font-bold pb-[2px] border-b-2 border-myBlue border-opacity-70' href="">Download Resume</a> */}
              <a className='flex gap-2'  href="">
              <span className='text-textBlack text-base leading-4 font-bold' >Resume</span>
                <img src={resumeIconB} className='h-4 w-4 object-contain' alt="resumeIcon" />
                </a>
            </div>
          </div>

          {/* socialMedia */}
          <div className='flex justify-center md:justify-start gap-x-8'>
            <img src={twitter} className="h-5 w-5 object-contain opacity-25 hover:opacity-50 transition duration-300 ease-in cursor-pointer " alt="twitter" />
            <img src={instagram} className="h-5 w-5 object-contain opacity-25 hover:opacity-50 transition duration-300 ease-in cursor-pointer" alt="twitter" />
            <img src={linkedIn} className="h-5 w-5 object-contain opacity-25 hover:opacity-50 transition duration-300 ease-in cursor-pointer" alt="twitter" />
            <img src={behance} className="h-5 w-5 object-contain opacity-25 hover:opacity-50 transition duration-300 ease-in cursor-pointer" alt="twitter" />
          </div>


        </div>
        {/* heroImg  */}
        <div className='col-span-12  md:col-span-6' >
          <img className='h-300px]  sm:h-[450px] hidden md:block w-full object-contain' src={heroImg} alt="" />
          <img className='h-300px]  sm:h-[450px] md:hidden w-full object-contain' src={heroMobileImg} alt="" />
        </div>
      </div>
    </section>
  )
}
