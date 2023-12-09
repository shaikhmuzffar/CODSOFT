import React from 'react'

// 

export default function SectionTitle({ subTitle, title,para }) {
  return (
    <section className='font-mulish  flex flex-col space-y-7 items-center text-center' >
        {subTitle && <p className='col-span-5 text-xl font-[800] text-myPurple '>{subTitle}</p>}
        <div className='col-span-7 space-y-4 text-textBlack'>
          {title && <h1 className=' text-[32px] font-extrabold opacity-90 leading-[44px] w-[400px] ' >{title}</h1>}
          {para && <p className='text-base mt-2 opacity-70 leading-[28px] w-[400px]' >{para}</p>}
        </div>
        {/* features */}
    </section>
  )
}
