import React from 'react'

import logo from '../assets/logo.png'
import arrowLongright from '../assets/arrowlongrightV2White.png'

const footerLinks = [
    {
        title: "Navigation",
        links: ['About', 'Services', "Projects", "Blogs"]
    },
    {
        title: "Showcase",
        links: ['Behance', 'Dribble', "Netlify", "Vercel"]
    },
]

export default function Footer() {
    return (
        <section className='mt-[120px] font-mulish text-textBlack' >
            {/* footer columns */}
            <div className='grid grid-cols-12 gap-5 capitalize ' >
                {/* footer column */}
                <div className='col-span-4'>
                    <img src={logo} className='h-10' alt="" />
                    <p className='opacity-70 mt-6 leading-8' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quis.</p>
                </div>

                {/* links */}
                <div className='col-span-2' >
                    <h1 className='font-bold opacity-90' >Navigation</h1>
                    <ul className='space-y-4 mt-8'>
                        <li className='font-sembold text-sm opacity-70 hover:opacity-90 transition duration-100 ease-in cursor-pointer'>Home</li>
                        <li className='font-sembold text-sm opacity-70 hover:opacity-90 transition duration-100 ease-in cursor-pointer' >About</li>
                        <li className='font-sembold text-sm opacity-70 hover:opacity-90 transition duration-100 ease-in cursor-pointer' >Projets</li>
                        <li className='font-sembold text-sm opacity-70 hover:opacity-90 transition duration-200 ease-in cursor-pointer' >Services</li>
                    </ul>
                </div>

                {/* links */}
                <div className='col-span-2' >
                    <h1 className='font-bold opacity-90' >Showcase</h1>
                    <ul className='space-y-4 mt-8'>
                        <li className='font-sembold text-sm opacity-70 hover:opacity-90 transition duration-100 ease-in cursor-pointer'>Behance</li>
                        <li className='font-sembold text-sm opacity-70 hover:opacity-90 transition duration-100 ease-in cursor-pointer' >Drubble</li>
                        <li className='font-sembold text-sm opacity-70 hover:opacity-90 transition duration-100 ease-in cursor-pointer' >Netilfy</li>
                        <li className='font-sembold text-sm opacity-70 hover:opacity-90 transition duration-200 ease-in cursor-pointer' >Vercel</li>
                    </ul>
                </div>

                {/* contact */}
                <div className='col-span-4'>
                    <div className='space-y-5'>
                        <h1 className='font-bold opacity-90'>join news letter </h1>
                        <p className='font-sembold text-sm leading-7 opacity-70' >subscribe our newsletter to get updates of my latest work and trending art.</p>
                    </div>
                    {/* input form  */}
                    <div className='mt-8 flex pl-[10px] pr-[6px] py-[6px] rounded-lg border-2 border-myPurple w-fit' >
                        <input className='w-[200px] outline-none placeholder:text-sm' type="text" placeholder='enter your email' />
                        <div className='px-3 h-7 flex items-center justify-between rounded-md bg-myPurple'>
                            <img src={arrowLongright} className='h-[8px]' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
