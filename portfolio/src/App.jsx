import React from 'react'

// components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Partners from './components/Partners'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Features from './components/Features'
import SectionTitle from './Ui components/SectionTitle2'
import Blogs from './components/Blogs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Copyright from './components/Copyright'

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
      <section className='w-10/12 mx-auto ' >
        <Services />
        <Projects />
      </section>
      <section className='bg-[#F4F5F6] mt-[120px] bg-opacity-50' >
        <Features />
      </section>
      <section className='w-10/12 mx-auto ' >
        <Blogs/>
        <Contact/>
        <Footer/>
        <Copyright/>
      </section>



    </>
  )
}

export default App
