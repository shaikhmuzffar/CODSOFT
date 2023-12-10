import React from 'react'
import SectionTitle from '../Ui components/SectionTitle4'

// images
import dorukoImg from '../assets/dorukoImg.png'
import portfolioImg from '../assets/portfolioImg.png'
import farmFreshImg from '../assets/farmFreshImg.png'
import githubOutlined from '../assets/githubOutlined.png'
import arrowCross from '../assets/arrowCross.png'


const projectsData = [
    {
        title: 'Doruko',
        category: 'frontend',
        subtitle: 'food delivery website',
        tags: ['frontend', 'food delivery', 'client side '],
        projectImg: dorukoImg,
        projectUrl: "",
    },
    {
        title: 'Portfolio',
        category: 'frontend',
        subtitle: 'personal Resume website',
        tags: ['frontend', 'portfolio' , 'client side '],
        projectImg: farmFreshImg,
        projectUrl: "",
    },
    {
        title: 'farmFresh',
        category: 'website design',
        subtitle: 'grocery UI/UX Design',
        tags: ['frontend', 'portfolio' , 'client side'],
        projectImg: portfolioImg,
        projectUrl: "",
    }
]

const categories = projectsData.map(({ category }) => category)
const uniqueCategories = [...new Set(categories)];
uniqueCategories.push('Backend','FullStack')


export default function Projects() {
    return (
        <section className='mt-[120px] font-mulish text-textBlack ' >
            {/* title */}
            <SectionTitle title="Recent Works" subTitle="My Projects" para="Lorem ipsum dolor sit amet consectetur. Fames urna nisl purus arcu in turpis convallis." />
            {/* body */}

            <div className='grid grid-cols-12 gap-y-[60px] md:gap-y-0 mt-20' >
                {/* menu  */}
                <ul className='col-span-12 gap-x-5 md:gap-x-0 overflow-scroll  flex flex-row md:flex-col md:col-span-5 md:space-y-5' >
                    {
                        uniqueCategories.map(category => <li className=' px-7 md:px-0 py-[5px] bg-textBlack md:bg-transparent text-white md:text-textBlack capitalize text-sm md:text-lg md:py-0  whitespace-nowrap font-medium rounded-full md:opacity-50 md:hover:opacity-80 cursor-pointer transition duration-150 ease-in ' >{category}</li>)
                    }
                </ul>
                {/* projects */}
                <div className='col-span-12 md:col-span-6  space-y-12'>
                    {/* single project */}

                    {projectsData.map(({ projectImg, title, subtitle, tags, projectUrl }) => (
                        <div>
                            <img src={projectImg} className='h-[220px] sm:h-[260px] w-full rounded-xl md:rounded-2xl object-cover' alt="" />

                            {/* projectInfo  */}
                            <div className='flex flex-col sm:flex-row items-start justify-between mt-5  sm:mt-8 gap-y-4 md:gap-y-4 px-1' >
                                <div className='space-y-2'>
                                    {/* project name */}
                                    <p className='font-extrabold flex flex-wrap flex-col md:flex-row gap-y-[2px] md:gap-x-2 opacity-90 text-2xl' >
                                        <span>{title}</span>
                                        <span className='hidden md:block' >-</span>
                                        <span className='text-xl md:text-2xl opacity-80 md:opacity-100 font-semibold md:font-extrabold ' >{subtitle}</span>
                                    </p>
                                    <p className='opacity-70' >
                                        {tags.join(' ꞏ ')}
                                    </p>
                                </div>
                                {/* userActions */}
                                <div className='flex gap-8' >
                                    <img src={githubOutlined} className='h-5 w-5 md:h-6 md:w-6 object-contain opacity-50 hover:opacity-80 transition easy-in cursor-pointer' alt="githubOutlined" />
                                    <img src={arrowCross} className='h-5 w-5 md:h-6 md:w-6 object-contain opacity-50 hover:opacity-80 transition easy-in cursor-pointer' alt="arrowCross" />
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    )
}
