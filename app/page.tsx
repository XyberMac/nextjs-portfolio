import About from '@/components/About'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import { Testimonials } from '@/components/Testimonials'
import Contact from "@/components/Contact"
import React from 'react'

export default function page() {
  return (
    <div className='w-full'>
      <Hero/>
      <About/>
      <Projects/>
      <Testimonials/>
      <Contact/>
    </div>
  )
}
