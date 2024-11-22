import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ContactBar from '@/components/ContactBar'
import React from 'react'
import Categories from '@/components/Categories'
import Achievements from '@/components/Achievements'
import Courses from '@/components/Courses'
import Team from '@/components/Team'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <main className='min-w-min'>
      <ContactBar/>
      <Header/>
      <Hero/>
      <Categories/>
      <Achievements/>
      <Courses/>
      <Team/>
      <Testimonials/>
      <Footer/>
      </main>
  )
}

export default page