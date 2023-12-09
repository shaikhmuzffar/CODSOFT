import React from 'react'
import Button from '../Ui components/Button'

// images 
import heroImg from '../assets/heroImg.png'
import behance from '../assets/behance.png'
import instagram from '../assets/instagramSolid.png'
import linkedIn from '../assets/linkedinSolid.png'
import twitter from '../assets/twitterSolid.png'

export default function Hero() {
  return (
    <section className='mt-[120px] font-mulish' >
      <div className='grid grid-cols-12 ' >
        {/* heroInffo */}
        <div className='col-span-6  flex flex-col gap-y-16' >
          {/* tagline and title  */}
          <div className='flex flex-col gap-y-11' >

            {/* titles and userActions */}
            <div className='flex flex-col gap-y-1'>
              {/* tagline */}
              <div className='px-3 py-[3px] bg-myOrange w-fit rounded opacity-70 '>
                <p className='text-xs text-white' >Hello, i'm muzaffar shaikh</p>
              </div>
              {/* titles */}
              <div className='flex flex-col gap-1 mt-4 ' >
                <h1 className='text-[48px] font-[800] leading-[55px] ' >Professional</h1>
                <h1 className='text-[48px] font-[800] leading-[55px]' >UI/UX Designer</h1>
                <h1 className='text-[48px] font-[800] leading-[55px]' >& Web Developer</h1>
              </div>
            </div>
            {/* userActions */}
            <div className='flex items-center gap-8' >
              <Button>
                Explore
              </Button>
              <a className='text-myBlue text-base leading-4 font-bold pb-[2px] border-b-2 border-myBlue border-opacity-70' href="">Download Resume</a>
            </div>
          </div>

          {/* socialMedia */}
          <div className='flex gap-x-8'>
            <img src={twitter} className="h-5 w-5 object-contain opacity-25 hover:opacity-50 transition duration-300 ease-in cursor-pointer "  alt="twitter" />
            <img src={instagram} className="h-5 w-5 object-contain opacity-25 hover:opacity-50 transition duration-300 ease-in cursor-pointer"  alt="twitter" />
            <img src={linkedIn} className="h-5 w-5 object-contain opacity-25 hover:opacity-50 transition duration-300 ease-in cursor-pointer"  alt="twitter" />
            <img src={behance} className="h-5 w-5 object-contain opacity-25 hover:opacity-50 transition duration-300 ease-in cursor-pointer"  alt="twitter" />
          </div>


        </div>

        {/* heroImg  */}
        <div className='col-span-6' >
          <img className='h-[450px] w-full object-contain' src={heroImg} alt="" />
        </div>
      </div>
    </section>
  )
}
