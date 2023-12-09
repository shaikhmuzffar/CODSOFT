import React from 'react'

// images 
import googleImg from '../assets/Google.png'
import netflixImg from '../assets/netflix.png'
import spotifyImg from '../assets/spotify.png'
import amazonImg from '../assets/amazon.png'
import nerdwalletImg from '../assets/nerdwallet.png'

export default function Partners() {
  return (
    <section className='mt-[180px] font-mulish' >
        <div>
            <p className='text-blackText opacity-90 font-bold text-center text-xl' >successful collaberation with more than 100+ brands</p>

            {/* partners  */}
            <div className='flex justify-center gap-x-16 my-11 opacity-40' >
                <img src={googleImg} className='h-6' alt="googleImg" />
                <img src={netflixImg} className='h-6' alt="googleImg" />
                <img src={spotifyImg} className='h-6' alt="googleImg" />
                <img src={amazonImg} className='h-6' alt="googleImg" />
                <img src={nerdwalletImg} className='h-6' alt="googleImg" />
            </div>
        </div>
    </section>
  )
}
