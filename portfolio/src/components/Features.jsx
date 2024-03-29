import React from 'react'
import SectionTitle from '../Ui components/SectionTitle1'

// image
import backendIcon from '../assets/backendIcon.png'
import uiIcon from '../assets/uiIcon.png'
import frontendIcon from '../assets/frontendIcon.png'
import arrowLongLeft from '../assets/arrowLongLeft.png'
import arrowLongRight from '../assets/arrowLongRight.png'

// data
const featuresData = [
    {
        icon: uiIcon,
        title: "UI/UX Design",
        para: "Lorem ipsum dolor sit amet consectetur. Fames urna nisl purus arcu in turpis convallis.Lorem ipsum dolor sit amet consectetur. "
    },
    {
        icon: frontendIcon,
        title: "Frontend Development",
        para: "Lorem ipsum dolor sit amet consectetur. Fames urna nisl purus arcu in turpis convallis.Lorem ipsum dolor sit amet consectetur. "

    },
    {
        icon: backendIcon,
        title: "Backend Development",
        para: "Lorem ipsum dolor sit amet consectetur. Fames urna nisl purus arcu in turpis convallis.Lorem ipsum dolor sit amet consectetur. "
    },

]

// faeaturs

export default function Features() {
    return (
        <section className='w-10/12 mx-auto py-10 font-mulish text-black' >
            {/* title  */}
            <SectionTitle title="what great values i'ill bring to you?" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ipsam!" />

            {/* cards */}
            <div className='grid grid-cols-4 md:grid-cols-12 gap-10 md:gap-5 lg:gap-10 mt-[90px]' >
                {featuresData.map(({ title, icon, para }) => (
                    <div key={title} className=' col-span-4 mx-5 sm:mx-10 md:mx-0  px-9 md:px-5 lg:px-9 flex gap-6 flex-col  justify-center items-center h-[400px] bg-white rounded-lg hover:shadow-xl transition duration-200 ease-in cursor-pointer' >
                        <img src={icon} className='h-[60px] w-[60px] object-contain' alt="" />
                        <div className='space-y-4 text-center' >
                            <h1 className='text-base  font-bold opacity-90 tracking-wider ' >{title}</h1>
                            <p className='opacity-70 text-xs leading-6 '>{para}</p>
                        </div>
                    </div>
                ))}
            </div>


            {/* arrows  */}
            <div className='hidden md:flex items-center justify-center gap-11 mt-[60px]'>
                <img src={arrowLongLeft} className='h-4 opacity-25 hover:opacity-50 transition duration-200 ease-in cursor-pointer' alt="arrowLongLeft" />
                <img src={arrowLongRight} className='h-4 opacity-25 hover:opacity-50 transition duration-200 ease-in cursor-pointer' alt="arrowLongRight" />
            </div>
        </section>
    )
}
