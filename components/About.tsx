import React from 'react'
import { Grid } from './Grid'
import Title from '@/components/Title'



export default function About() {
  return (
    <div id='about' className='bg-indigo-950 pt-5'>
      <Title image='/about-pic.png'/>
      <Grid/>
    </div>
  )
}
