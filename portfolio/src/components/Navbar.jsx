import React, { useState } from 'react'

// images
import Logo from '../assets/logo.png'
// import LogoWhite from '../assets/logowhite.png'
import hamburger from '../assets/hamburger.png'
import cross from '../assets/cross.png'

// components
import Button from '../Ui components/Button'

export default function Navbar() {

    const [hamMenu,setHamMenu] =useState(false) 
    const navlinks =
        [
            {
                link: "Home",
                arrow: false,
            },
            {
                link: "About",
                arrow: false,
            },
            {
                link: "Services",
                arrow: false,
            },
            {
                link: "Projects",
                arrow: false,
            },
            {
                link: "Blogs",
                arrow: false,
            }
        ]

    return (
        <section className='h-[70px] sm:h-[90px] md:h-[90px] w-10/12 mx-auto  ' >
            <div className=' flex justify-between items-center h-full'>
                {/* logo */}
                <img className='hidden md:block md:h-10 md:w-[120px] lg:h-17 lg:w-[170px] object-contain' src={Logo} alt="" />
                {/* <img className='h-8 w-[120px] sm:h-12 sm:w-[160px]   md:hidden object-contain' src={LogoWhite} alt="" /> */}
                {/* navigation */}
                <ul className={`${hamMenu?"visible":"invisible"} absolute md:visible md:static z-20 md:z-0 md:flex w-full md:w-fit px-7 md:px-0 py-10 md:py-0 flex-col gap-y-5 top-[60px] md:top-0 left-0  bg-myPurple md:bg-transparent  md:flex-row md:gap-[30px] lg:gap-[60px] transition duration-150 ease-in`}>
                  
                    {navlinks.map(({ link }) => (
                        <li onClick={()=>setHamMenu(false)} className='text-white md:text-textBlack py-2 text-center hover:bg-[#b96eff] md:hover:bg-transparent bg-opacity-25 rounded-lg hover:text-white md:hover:text-[#b96eff]  md:bg-transparent font-mulish text-lg md:text-base font-bold cursor-pointer'>{link}</li>
                    ))}
                    {/* button */}
                    <li> <button className='h-11 w-full md:w-fit px-8 md:hidden  mt-[30px] bg-white text-myPurple text-base font-semibold rounded-md' >
                        Contact
                    </button></li>
                </ul>
                {/* button */}
                <div className='hidden md:block' >
                    <Button>
                        Contact
                    </Button>
                </div>

                {/* hamburger icon */}
                <div className='md:hidden' >
                {hamMenu?<img className='h-5 w-5 object-contain' src={cross} alt="cross" onClick={()=>setHamMenu(false)} />
                    :<img className='h-5 w-5 sm:h-6 sm:w-6 object-contain' src={hamburger} alt="cross" onClick={()=>setHamMenu(true)} />  }
                    </div>
            </div>
        </section>
    )
}
