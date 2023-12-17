import React from 'react'
import Button from '../Ui components/Button'

// images 
import instagram from '../assets/instagramSmall.png'
import pinterest from '../assets/pinterestSmall.png'
import twitter from '../assets/twitterSmall.png'
import discord from '../assets/discordSmall.png'
import behance from '../assets/behanceSmall.png'

const medias=[
    instagram,pinterest,twitter,discord,behance
]
const formData = [
    {
        inputType: 'text',
        labelText: 'email address',
        heightOfField: 12,
    },
    {
        inputType: 'text',
        labelText: 'your message',
        heightOfField: 36,
    },
]

export default function ContactForm() {
    return (
        <section className='mt-[120px] space-y-[60px] w-full mx-auto sm:w-[400px]'>
            <h1 className='text-center text-myPurple text-[28px] font-extrabold' >Get in touch</h1>

            <form className='space-y-8 '>
                {
                    formData.map(({ inputType, labelText, heightOfField }) => (
                        < div className='flex flex-col gap-y-3' >
                            <label htmlFor="" className=' font-bold' >{labelText}</label>
                            <input type={inputType} className={`h-${heightOfField} w-full bg-gray-100 rounded-md outline-none px-4`} />
                        </div>
                    ))
                }
               <div className='items-center flex flex-col  justify-center space-y-[45px]' > 
               <Button>
                    Send
                </Button>
                {/* medias  */}
                <div className='flex gap-7' >
                {
                medias.map(image=>(
                    <img src={image} className='h-5 w-5 object-contain opacity-25 hover:opacity-75 transition duration-200 ease-in' alt="resumeIcon" />
                ))}
                </div>
               </div>

            </form>

        </section >
    )
}
