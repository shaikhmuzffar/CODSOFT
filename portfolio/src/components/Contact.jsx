import React from 'react'
import SectionTitle from '../Ui components/SectionTitle1'
import Button from '../Ui components/Button'

export default function Contact() {
  return (
    <section className='mt-[120px] font-mulish text-textBlack '>
        <SectionTitle tSize={true} title="Let's Solve your problems together" subTitle="Contact Me" para="Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur." />
        <div className='flex items-center justify-center mt-[60px]'>
        <Button>
            Ping Me
        </Button>
        </div>
    </section>
  )
}
