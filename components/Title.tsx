import React from 'react'

type img={
    image: string
}

export default function Title({image}: img) {
  return (
    <div className='bg-indigo-950 w-full h-[35vh] flex  justify-center overflow-hidden mt-3'>
      <img src={image} alt="image" />
    </div>
  )
}
