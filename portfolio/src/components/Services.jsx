import React from 'react'

// images 
import playButton from '../assets/playButton.png'

//components
import SectionTitle from '../Ui components/SectionTitle6'

// data
const servicesData = [
    {
        color:"myPurple",
        title:"App Development",
        para:"Lorem ipsum dolor sit amet consectetur. Molestie urna nibh mattis consectetur libero lacus facilisis urna ultricies."
    },
    {
        color:"myOrange",
        title:"Web Development",
        para:"Lorem ipsum dolor sit amet consectetur. Molestie urna nibh mattis consectetur libero lacus facilisis urna ultricies."
    },
    {
        color:"myOrange",
        title:"UI/UX Design",
        para:"Lorem ipsum dolor sit amet consectetur. Molestie urna nibh mattis consectetur libero lacus facilisis urna ultricies."
    },
]

export default function Services() {
  return (
    <section className='mt-[120px]' >
        <SectionTitle title="We Provide" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iusto harum sit magnam cupiditate cum deserunt sapiente ratione dignissimos ducimus." subTitle={'My Services'}  ></SectionTitle>

        {/* body  */}
        <div className='grid grid-cols-12 mt-[90px] gap-y-[90px] md:mt-16 font-mulish' >
            {/* services  */}
            <div className='col-span-12 md:col-span-6 ' >
               <div className='space-y-12 md:space-y-16'>
                 {/* single service  */}
                 {servicesData.map((service,index)=>(
                    <div className='space-y-4'>
                        <p className={`font-bold flex items-center justify-center text-sm w-[45px] h-[28px] rounded-[30px] text-white bg-${service.color}`} >0{index+1}</p>
                        <h1 className='text-xl font-extrabold opacity-90' >{service.title}</h1>
                        <p  className='w-10/12 leading-7 md:w-9/12 lg:w-7/12 opacity-70' >{service.para}</p>
                    </div>
                ))}
               </div>
            </div>

            {/* video  */}
            <div className='col-span-12 md:col-span-6 lg:col-span-5 xl:col-span-4 flex justify-center rounded-2xl md:rounded-[30px] items-center h-[320px] sm:h-[300px] md:h-[500px] bg-[#D0D8E7]' >
                <img src={playButton} className='h-12 w-12 object-contain' alt="" />
            </div>
        </div>
    </section>
  )
}
