import React from 'react'
import { FloatingNav } from "@/components/ui/floating-navbar";


export default function Navbar() {
  return (
    <div className='overflow-hidden w-full relative '>
      <FloatingNav navItems={
        [
          {name: "Home", link: "/"},
          {name: "About", link: "#about"},
          {name: "Projects", link: "#projects"},
          {name: "Testimonials", link: "#testimonials"},
          {name: "Contact", link: "#contact"},
          {name: "Blog", link: "/blog"},
        ]
        
      }/>
    </div>
  )
}
