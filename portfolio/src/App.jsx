import React from 'react'

// components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Partners from './components/Partners'
import About from './components/About'

function App() {

  return (
    <>
      <section className='w-10/12 mx-auto ' >
        <Navbar />
        <Hero />
        <Partners />
      </section>
      <section className='bg-[#F4F5F6] mt-[120px] bg-opacity-50' >
        <About />
      </section>

    </>
  )
}

export default App
