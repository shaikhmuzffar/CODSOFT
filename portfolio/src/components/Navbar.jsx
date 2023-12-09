import React from 'react'

// images
import Logo from '../assets/logo.png'
import Button from '../Ui components/Button'

export default function Navbar() {

    const navlinks =
        [
            {
                link: "Home",
                arrow:false,
            },
            {
                link: "About",
                arrow:false,
            },
            {
                link: "Services",
                arrow:false,
            },
            {
                link: "Projects",
                arrow:false,
            },
            {
                link: "Blogs",
                arrow:false,
            }
        ]

    return (
        <section className='h-[90px] ' >
           <div className='flex justify-between items-center  h-full'>
             {/* logo */}
             <img className='h-11 w-[170px] object-contain' src={Logo} alt="" />
            {/* navigation */}
            <ul className='flex gap-[60px]' >
                <li className='text-myPurple font-mulish text-sm font-bold cursor-pointer'>Home</li>
                <li className='text-blackText font-mulish text-sm font-bold opacity-70 hover:text-myPurple hover:opacity-100 transition duration-300 ease-in cursor-pointer '>About</li>
                <li className='text-blackText font-mulish text-sm font-bold opacity-70 hover:text-myPurple hover:opacity-100 transition duration-300 ease-in cursor-pointer '>Services</li>
                <li className='text-blackText font-mulish text-sm font-bold opacity-70 hover:text-myPurple hover:opacity-100 transition duration-300 ease-in cursor-pointer '>Projects</li>
                <li className='text-blackText font-mulish text-sm font-bold opacity-70 hover:text-myPurple hover:opacity-100 transition duration-300 ease-in cursor-pointer '>Blogs</li>
            </ul>
            {/* button */}
           <Button>
            Contact
           </Button>
           </div>
        </section>
    )
}
