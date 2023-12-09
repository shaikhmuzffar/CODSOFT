import React from 'react'

export default function SectionTitle({ subTitle, title,para }) {
  return (
    <section className='font-mulish' >
      <div className='grid grid-cols-12' >
        <p className='col-span-5 text-xl font-[800] text-myPurple '>{subTitle}</p>
        {
            title &&
        <div className='col-span-7 text-textBlack'>
          <h1 className=' text-[32px] font-extrabold opacity-90' >{title}</h1>
          <p className='text-base mt-2 opacity-70 leading-[30px]' >{para}</p>
        </div>
            }
      </div>
    </section>
  )
}
