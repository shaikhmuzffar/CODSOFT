import React, { useState } from 'react'

// component
import Button from '../Ui components/Button'
import SectionTitle from '../Ui components/SectionTitle6'



// images
import aboutImg from '../assets/aboutImg.png'
import personalIcon from '../assets/personalIcon.png'
import educationIcon from '../assets/educationIcon.png'
import certificationIcon from '../assets/certificationIcon.png'
import skillsIcon from '../assets/skillsIcon.png'
import arrowDown from '../assets/arrowDown.png'
import arrowRight from '../assets/arrowRight.png'
import resumeIcon from '../assets/resumeIcon.png'

// aboutData
const aboutData = [
    {
        title: "Personal",
        icon: personalIcon,
        data: [
            {
                key: "Name",
                pair: "Muzaffar Shaikh",
                link: false,

            },
            {
                key: "Email",
                pair: "shaikhmuzaffar82@gmail.com",
                link: true,
            },
            {
                key: "Phone",
                pair: "+12 6287144812",
                link: false,
            },
            {
                key: "Nationality",
                pair: "indian",
                link: false,
            },
            {
                key: "Website",
                pair: "mywebsite.com",
                link: true,
            },
        
            {
                key: "Freelance",
                pair: "available",
                link: false,
            },
        ],
    },
    {
        title: "Education",
        icon: educationIcon,
        data: [
            {
                key: "Dipolma",
                pair: "computer science",
                link: false,
            },
            {
                key: "Degree",
                pair: "B.Tech in Computer Engineering",
                link: false,
            },
        ],
    },
    {
        title: "Certifications",
        icon: certificationIcon,
        data: [
            {
                key: "",
                pair: "MERN Stack Developer",
                link: false,
            },
            {
                key: "",
                pair: "Responsive Design and Development",
                link: false,
            },
            {
                key: "",
                pair: "UI/UX Developer",
                link: false,
            },

        ],
    },
    {
        title: "Skills",
        icon: skillsIcon,
        data: [
            {
                key: "Languages",
                pair: "Javascript, C++, Python",
                link: false,
            },
            {
                key: "libraries",
                pair: "React.JS, GSAP, Express.JS",
                link: false,
            },
            {
                key: "Framework",
                pair: "Next.JS,Redux Toolkit,React Router",
                link: false,
            },
            {
                key: "UI Framework & preprocessor",
                pair: "Tailwind, Bootstrap, MUI, SASS/SCSS",
                link: false,
            },
            {
                key: "Databases",
                pair: "MongoDB, SQL",
                link: false,
            },

        ],
    },
]

export default function About() {
    const [visibleDetails,setVisibleDetails]= useState('')
    return (
        <section className='w-10/12 mx-auto  py-8 font-mulish text-black' >
            <SectionTitle subTitle={'About Me'} />
            {/* aboutBody */}
            <div className='grid grid-cols-12 mt-11 items-start gap-y-[45px] sm:gap-y-[60px]  ' >
                {/* aboutInfo  */}
                <div className='col-span-12 md:col-span-6 lg:col-span-6' >
                    {/* inforows */}
                    <div className='space-y-3 w-full'>
                        {
                            aboutData.map(({ title, icon, data }) => (
                                <div className='space-y-3 w-full' key={title}>
                                    {/* titleRow 1 */}
                                    <div onClick={()=>{
                                        if(visibleDetails){
                                        setVisibleDetails('')
                                        }else{
                                            setVisibleDetails(title)
                                        }

                                        }} className='flex justify-between px-4 py-4 rounded-xl bg-white items-center'>
                                        <div className='flex items-center gap-8'>
                                            <img className='h-[40px] w-[40px] object-contain' src={icon} alt="" />
                                            <h1 className='text-xl font-bold'>{title}</h1>
                                        </div>
                                        <img className='h-5 w-3 object-contain' src={arrowRight} alt="" />
                                    </div>
                                    {/* detailRow */}
                                    {visibleDetails==title?
                                        <div  className='px-3 py-3 sm:px-4 sm:py-4 bg-white rounded-xl'>
                                        {data.map(({ key, pair,link }) => (
                                            <div className='flex flex-wrap gap-y-2 text-sm pl-5 py-2' key={key}>
                                                {/* detailRow */}
                                               {key && <p className='font-extrabold opacity-40 w-[90px] sm:w-[120px]'>{key}</p>}
                                               {link
                                               ?<span className='font-extrabold opacity-80 text-myBlue underline underline-offset-1 '>{pair}</span>
                                               :<span className='font-extrabold opacity-80'>{pair}</span>

                                               }
                                            </div>
                                        ))}
                                    </div>:""}

                                </div>

                            ))

                        }
                    </div>
                    
                </div>

                {/* aboutImg */}
                <div className='col-span-12  md:col-span-6 '>
                    <img src={aboutImg} className='h-[380px] md:h-[400px]   w-full  object-contain' alt="aboutImg" />
                    {/* file download */}
                    <div className='flex flex-col sm:mt-5 items-center space-y-5 justify-center '>
                        <div className='flex items-center px-5 py-3 w-fit rounded-lg space-x-3 bg-myPurple'>
                            <span className='text-white font-bold'>My Resume</span>
                            <div className='h-4 w-[1px] bg-white' ></div>
                            <img src={resumeIcon} className='h-4 w-4 object-contain' alt="resumeIcon" />
                        </div>
                        <p className='text-sm opacity-90'>click above to <span className='font-extrabold' >Download</span> my Resume</p>
                    </div>
                </div>
            </div>
        </section >
    )
}
