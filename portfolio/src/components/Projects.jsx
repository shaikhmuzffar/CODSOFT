
import React, { useState } from 'react'
import SectionTitle from '../Ui components/SectionTitle2'

// images
import dorukoImg from '../assets/dorukoImg.png'
import portfolioImg from '../assets/portfolioImg.png'
import farmFreshImg from '../assets/farmFreshImg.png'
import netlify from '../assets/netlify.png'
import dribble from '../assets/dribble.png'
import githubOutlined from '../assets/githubOutlined.png'
import more from '../assets/more.png'
import arrowCross from '../assets/arrowCross.png'


const projectsData = [
    {
        title: 'Doruko',
        category: [
            'frontend',
            'myOrange',
        ],
        subtitle: 'food delivery website',
        tags: ['frontend', 'food delivery', 'client side '],
        projectImg: dorukoImg,
        projectUrl: "",
    },

    {
        title: 'farmFresh',
        category: [
            'web design',
            'myPurple',
        ],
        subtitle: 'grocery UI/UX Design',
        tags: ['frontend', 'portfolio', 'client side'],
        projectImg: farmFreshImg,
        projectUrl: "",
    },
    {
        title: 'Portfolio',
        category: [
            'frontend',
            'myOrange',
        ],
        subtitle: 'personal resume website',
        tags: ['frontend', 'portfolio', 'client side '],
        projectImg: portfolioImg,
        projectUrl: "",
    },
]

const categories = projectsData.map(({ category }) => category[0])
const uniqueCategories = [...new Set(categories)];
uniqueCategories.push('Backend', 'FullStack')


export default function Projects() {
    const [projectQuantity, setProjectQuantity] = useState(2);
    // console.log(projectQuantity)
    return (
        <section className='mt-[120px] font-mulish text-textBlack ' >
            {/* title */}
            <SectionTitle title="Recent Works" subTitle="My Projects" para="Lorem ipsum dolor sit amet consectetur. Fames urna nisl purus arcu in turpis convallis." />
            {/* body */}

            <div className='grid grid-cols-12 gap-y-[60px]  lg:gap-y-0 mt-20' >
                {/* menu  */}
                <ul className='col-span-12  lg:col-span-2 xl:col-span-3 flex flex-row lg:flex-col  gap-x-5 lg:gap-x-0 md:gap-y-5 overflow-scroll lg:overflow-visible  ' data-simplebar >
                    {
                        uniqueCategories.map(category => <li className=' px-7 lg:px-0 py-3 lg:py-0 rounded-md  border lg:border-0  bg-textBlack md:bg-transparent text-white md:text-textBlack capitalize text-sm md:text-lg  whitespace-nowrap font-medium  md:opacity-50 md:hover:opacity-80 cursor-pointer transition duration-150 ease-in ' >{category}</li>)
                    }
                </ul>

                {/* projects and button */}
                <div className=' col-span-12 lg:col-span-10 xl:col-span-9  space-y-[60px] ' >
                    {/* projects */}
                    <div className='gap-x-5 gap-y-9 grid grid-cols-12 '>
                        {/* single project */}
                        {projectsData.slice(0, projectQuantity).map(({ projectImg, title, category, subtitle, tags, projectUrl }) => (
                            <div className='col-span-12 md:col-span-6  rounded-3xl shadow-lg ' >
                                {/* project Img  */}
                                <div className='relative h-[250px] sm:h-[280px] md:h-[280px] w-full rounded-xl md:rounded-3xl overflow-hidden' >
                                    <img src={projectImg} className='h-full w-full  object-cover' alt="projectImg" />
                                    <div className='absolute bg-black h-full w-full top-0 left-0 opacity-10' ></div>
                                </div>
                                {/* projectInfo  */}
                                <div className='my-3 md:my-5 px-5 space-y-3 md:space-y-5'>
                                    {/* titles and info */}
                                    <div className='pb-2 md:pb-3 border-b'>
                                        <div className='space-y-1 md:space-y-2' >
                                            {/* category  */}
                                            <span className={`bg-${category[1]}   text-[10px] md:text-xs capitalize rounded text-white py-1 px-4`} >{category[0]}</span>
                                            {/* title */}
                                            <h1 className='text-[20px] md:text-[24px]  font-extrabold line-clamp-1'>{title} - {subtitle}</h1>
                                        </div>
                                        {/* tags */}
                                        <span className='opacity-70 text-sm md:text-base' >
                                            {
                                                tags.join(' ꞏ ')
                                            }
                                        </span>
                                    </div>
                                    {/* useractions */}
                                    <div className='flex justify-between' >
                                        <div className='flex gap-3 md:gap-5' >
                                            {/* github */}
                                            <div className='h-10 w-10 md:h-12 md:w-14 flex items-center justify-center  rounded-xl bg-gray-100 hover:bg-gray-200 transition duration-200 ease-in cursor-pointer' >
                                                <img src={githubOutlined} className='h-5 w-5 object-contain' alt="githubOutlined" />
                                            </div>
                                            {/* netlify */}
                                            <div className='h-10 w-10 md:h-12 md:w-14 flex items-center justify-center  rounded-xl bg-gray-100 hover:bg-gray-200 transition duration-200 ease-in cursor-pointer' >
                                                <img src={netlify} className='h-5 w-5 object-contain' alt="githubOutlined" />
                                            </div>
                                            {/* dribble */}
                                            <div className='h-10 w-10 md:h-12 md:w-14 flex items-center justify-center  rounded-xl bg-gray-100 hover:bg-gray-200 transition duration-200 ease-in cursor-pointer' >
                                                <img src={dribble} className='h-5 w-5 object-contain' alt="githubOutlined" />
                                            </div>
                                        </div>
                                        {/* more */}
                                        <div className='h-10 w-10 md:h-12 md:w-14 flex items-center justify-center  rounded-xl bg-gray-100 hover:bg-gray-200 transition duration-200 ease-in cursor-pointer' >
                                            <img src={more} className='h-5 w-5 object-contain' alt="githubOutlined" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}

                    </div>
                    <div className='flex justify-center' >
                        <button className='py-3  text-70 rounded-[6px] text-sm px-5 w-fit whitespace-nowrap border' onClick={() => {
                            if (projectQuantity == 2) {
                                setProjectQuantity(projectsData.length)
                            } else {
                                setProjectQuantity(2)
                            }
                        }}  >{projectQuantity == 2 ? "show more" : "show less"}</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
