import React from 'react'
import SectionTitle from '../Ui components/SectionTitle4'

import blogImg1 from '../assets/blogImg1.png'
import blogImg2 from '../assets/blogImg2.png'
import blogImg3 from '../assets/blogImg3.png'
import arrowLongRight from '../assets/arrowLongRightV2.png'

const blogData = [
    {
        title: "Top 10 JavaScript Frameworks You Should Know in 2023",
        para: "Stay ahead in 2023 with insights into the top JavaScript frameworks, empowering you to build robust and dynamic web applications.",
        image: blogImg1,
        tags: ["programming", "trends"],
        status: "Popular",
        color: "myOrange"
    },
    {
        title: "Mastering Responsive Design: A Comprehensive Guide",
        para: "Craft responsive websites with our guide to mastering design techniques and creating seamless user experiences for all devices.",
        image: blogImg3,
        tags: ["web development", " responsive design"],
        status: "new",
        color: "myPink"
    },
    {
        title: "Building Modern Web Applications with React and Redux",
        para: "Dive into React and Redux for powerful web development. Learn to build modern, efficient, and scalable applications with ease.",
        image: blogImg2,
        tags: ["application", " web technologies"],
        status: "trending",
        color: "myPurple"
    },
]

export default function Blogs() {
    return (
        <section className='mt-[120px] font-mulish text-textBlack' >
            <SectionTitle title="Recent Articles" subTitle="My Blogs" para="Lorem ipsum dolor sit amet consectetur. Fames urna nisl purus arcu in turpis convallis." />

            {/* submenu */}
            <div className='grid grid-cols-12 mt-[45px] overflow-scroll md:overflow-visible ' >
                {/* blank div for adustment */}
                <div className='col-span-5 hidden md:block'></div>
                {/* submenu */}
                <ul className='col-span-7 flex gap-x-[45px] text-sm ' >
                    <li className='px-3 py-[3px] text-white bg-black rounded-full cursor-pointer whitespace-nowrap' >Web Development</li>
                    <li className='cursor-pointer opacity-90' >Trends</li>
                    <li className='cursor-pointer opacity-90' >Technology</li>
                </ul>

            </div>

            {/* blogs */}
            <div className='mt-[60px]'>
                {/* single blog  */}
                <div className='flex flex-col gap-y-[60px] '>
                    {blogData.map(({ color, status, title, para, tags,image }) => (
                        <div className='grid grid-cols-12 gap-5 '>
                            {/* blog info */}
                            <div className='col-span-12 md:col-span-5 md:pr-7 '>
                                <div className='space-y-5'>
                                    <span className={`bg-${color == "myPink" ? "myPink" : color} text-white text-xs  font-bold px-2 py-[3px] uppercase tracking-wider rounded-sm`} >{status}</span>
                                    <div className='space-y-3'>
                                        <h1 className='text-2xl font-bold opacity-90 leading-[40px] line-clamp-2' >{title}</h1>
                                        <p className='text-xl opacity-90 line-clamp-1'> {tags.join(' ꞏ ')}</p>
                                        <p className='text-sm opacity-70 leading-7 line-clamp-2'>{para}</p>
                                    </div>
                                    <img src={arrowLongRight} className='h-3 opacity-25 hover:opacity-50 cursor-pointer transition duration-200 ease-in' alt="" />
                                </div>
                            </div>
                            {/* blog img */}
                            <div className='col-span-12 md:col-span-7 lg:col-span-6 xl:col-span-5  '>
                                <img src={image} alt={title} className='h-[300px] sm:h-[350px] rounded-lg sm:rounded-xl md:rounded-2xl w-full object-cover' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
