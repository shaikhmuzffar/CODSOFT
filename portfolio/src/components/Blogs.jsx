import React from 'react'
import SectionTitle from '../Ui components/SectionTitle4'

import blogImg1 from '../assets/blogImg1.png'
import blogImg2 from '../assets/blogImg2.png'
import blogImg3 from '../assets/blogImg3.png'

const blogData= [
    {
        title:"Top 10 JavaScript Frameworks You Should Know in 2023",
        para:"Stay ahead in 2023 with insights into the top JavaScript frameworks, empowering you to build robust and dynamic web applications.",
        image:blogImg1,
        tags:"programming, trends",
        status:"Popular",
    },
    {
        title:"Mastering Responsive Design: A Comprehensive Guide",
        para:"Craft responsive websites with our guide to mastering design techniques and creating seamless user experiences for all devices.",
        image:blogImg3,
        tags:"web development, responsive design",
        status:"new",
    },
    {
        title:"Building Modern Web Applications with React and Redux",
        para:"Dive into React and Redux for powerful web development. Learn to build modern, efficient, and scalable applications with ease.",
        image:blogImg2,
        tags:"application, web technologies",
        status:"trending",
    },
]

export default function Blogs() {
  return (
    <section className='mt-[120px] font-mulish text-textBlack' >
        <SectionTitle title="Recent Articles" subTitle="My Blogs" para="Lorem ipsum dolor sit amet consectetur. Fames urna nisl purus arcu in turpis convallis." />

        {/* submenu */}
       <div className='grid grid-cols-12 mt-[45px]' >
        {/* blank div for adustment */}
        <div className='col-span-5'></div>
        {/* submenu */}
        <ul className='col-span-7 flex space-x-[45px] text-sm ' >
            <li className='px-3 py-[3px] text-white bg-black rounded-full cursor-pointer' >Web Development</li>
            <li className='cursor-pointer opacity-90' >Trends</li>
            <li className='cursor-pointer opacity-90' >Technology</li>
        </ul>
       </div>
    </section>
  )
}
