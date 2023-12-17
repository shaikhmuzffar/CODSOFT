import React, { useState } from 'react'
import SectionTitle from '../Ui components/SectionTitle2'

import blogImg1 from '../assets/blogImg1.png'
import blogImg2 from '../assets/blogImg2.png'
import blogImg3 from '../assets/blogImg3.png'
import arrowCross from '../assets/arrowCross.png'

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
        status: "[#f31559]",
        color: "green"
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
    const [blogQuantity, setBlogQuantity] = useState(2);
    console.log(blogQuantity)
    return (
        <section className='mt-[120px] font-mulish text-textBlack' >
            <SectionTitle title="Recent Articles" subTitle="My Blogs" para="Lorem ipsum dolor sit amet consectetur. Fames urna nisl purus arcu in turpis convallis." />

            {/* submenu */}
            <div className='grid grid-cols-12 mt-[45px] overflow-scroll md:overflow-visible ' >
                {/* blank div for adustment */}
                <div className='col-span-2 hidden lg:block'></div>
                {/* submenu */}
                <ul className='col-span-10 flex gap-x-[45px] text-sm ' >
                    <li className='px-3 py-[3px] text-white bg-black rounded-full cursor-pointer whitespace-nowrap' >Web Development</li>
                    <li className='cursor-pointer opacity-90' >Trends</li>
                    <li className='cursor-pointer opacity-90' >Technology</li>
                </ul>

            </div>

            {/* blogs */}
            <div className='mt-[60px] grid grid-cols-12'>
                {/* dummy div for spacing */}
                <div className=' hidden lg:block col-span-1 lg:col-span-2 xl:col-span-3'  />
                {/* blogs  */}
                <div className='col-span-12 lg:col-span-10 xl:col-span-9 flex flex-col gap-y-[60px] '>
                    {blogData.slice(0,blogQuantity).map(({ color, status, title, para, tags, image }) => (
                        <div className='grid grid-cols-12 gap-y-5 md:gap-y-0 '>
                            {/* blog img */}
                            <div className='col-span-12 md:col-span-6 lg:col-span-6 h-[250px] sm:h-[300px] md:h-[350px]' >
                                <img src={image} className='w-full h-full object-cover rounded-lg' alt={title} />
                            </div>
                            {/* blog info */}
                            <div className='col-span-12  gap-y-5 md:gap-y-0 md:col-span-6 lg:col-span-6 pl-7 flex flex-col justify-between items-start' >
                                {/* status */}
                                <span className={`bg-${color} uppercase text-xs md:text-sm tracking-wider font-semibold text-white px-4 py-1 rounded-sm `} >{status}</span>

                                {/* titles */}
                                <div className='space-y-3 md:space-y-2 ' >
                                    <h1 className='text-xl md:text-2xl font-extrabold line-clamp-2 '>{title}</h1>
                                    <p className='opacity-90 text-sm md:text-base font-bold ' >
                                        {
                                            tags.join(' ꞏ ')
                                        }
                                    </p>
                                    <p className='opacity-70 text-sm md:text-base leading-7 line-clamp-2' >{para}</p>
                                </div>

                                {/* useractions */}
                                <div className='h-10 w-10 md:h-12 md:w-14 flex items-center justify-center  rounded-xl bg-gray-100 hover:bg-gray-200 transition duration-200 ease-in cursor-pointer' >
                                    <img src={arrowCross} className='h-3 w-3 md:h-4 md:w-4 object-contain' alt="githubOutlined" />
                                </div>
                            </div>

                        </div>
                    ))}
                    <div className='col-span-12 flex justify-center' >
                        <button className='py-3  text-70 rounded-[6px] text-sm px-5 w-fit whitespace-nowrap border' onClick={() => {
                            if (blogQuantity == 2) {
                                setBlogQuantity(blogData.length)
                            } else {
                                setBlogQuantity(2)
                            }
                        }}  >{blogQuantity == 2 ? "show more" : "show less"}</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
