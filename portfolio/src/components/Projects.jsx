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


export default function Projects() {
    return (
        <section className='mt-[120px] font-mulish text-textBlack ' >
            {/* title */}
            <SectionTitle title="Recent Works" subTitle="My Projects" para="Lorem ipsum dolor sit amet consectetur. Fames urna nisl purus arcu in turpis convallis." />
            {/* body */}

            <div className='grid grid-cols-12  mt-20' >
                {/* menu  */}
                <ul className='col-span-5 space-y-5 ' >
                    {
                        uniqueCategories.map(category => <li className='opacity-50 font-bold text-lg hover:opacity-80 cursor-pointer transition duration-150 ease-in ' >{category}</li>)
                    }
                </ul>
                {/* projects */}
                <div className='col-span-6  space-y-11'>
                    {/* single project */}

                    {projectsData.map(({ projectImg, title, subtitle, tags, projectUrl }) => (
                        <div>
                            <img src={projectImg} className='h-[300px] w-full rounded-2xl object-cover' alt="" />

                            {/* projectInfo  */}
                            <div className='flex items-start justify-between mt-8 px-1' >
                                <div className='space-y-2'>
                                    {/* project name */}
                                    <p className='font-extrabold flex gap-x-2 opacity-90 text-2xl' >
                                        <span>{title}</span>
                                        <span>-</span>
                                        <span>{subtitle.length>15?subtitle.slice(0,20)+"...":subtitle}</span>
                                    </p>
                                    <p className='opacity-70' >
                                        {tags.join(' ꞏ ')}
                                    </p>
                                </div>
                                {/* userActions */}
                                <div className='flex gap-8' >
                                    <img src={githubOutlined} className='h-6 w-6 object-contain opacity-50 hover:opacity-80 transition easy-in cursor-pointer' alt="githubOutlined" />
                                    <img src={arrowCross} className='h-6 w-6 object-contain opacity-50 hover:opacity-80 transition easy-in cursor-pointer' alt="arrowCross" />
                                </div>
                            </div>


                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}
