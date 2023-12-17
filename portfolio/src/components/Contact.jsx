import React, { useState } from 'react'

// components 
import SectionTitle from '../Ui components/SectionTitle1'
import Button from '../Ui components/Button'
import ContactForm from './ContactForm'

export default function Contact() {
  const [contactForm, setContactForm] = useState(false)
  return (
    <section className='mt-[120px] font-mulish text-textBlack '>
      {contactForm ?<ContactForm />
      :<div>
      <SectionTitle tSize={true} title="Let's Solve your problems together" subTitle="Contact Me" para="Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur." />
      <div className='flex items-center justify-center mt-[60px]'>
        <button className='h-10 px-8 bg-myPurple text-white text-sm font-semibold rounded-lg' onClick={() => setContactForm(true)} >
          Ping Me
        </button>
      </div>
    </div>
      }
    </section>
  )
}
