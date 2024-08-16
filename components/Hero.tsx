"use client"

import React from 'react'
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import Link from 'next/link';
import MagicButtons from "./ui/MagicButton";
import { FaLocationArrow } from 'react-icons/fa6';


export default function Hero() {
    const words = [
        {
          text: "Hi",
        },
        {
          text: "I'm",
        },
        {
          text: "Makhosi",
        },
        {
          text: "a fullstack",
        },
        {
          text: "web developer.",
          className: "text-blue-500 dark:text-blue-500 text-[140%]  max-[480px]:text-sm  max-[250px]:text-sm",
        },
      ];
  return (
    <div className='min-h-[100vh] w-full relative flex items-center flex-col justify-center' >
      <video className='w-[100%] object-cover p-0 m-0 absolute h-[100vh] top-0 left-0 right-0 bottom-0 z-[-4]' src="/evato.mp4" autoPlay loop={true} muted></video>
    <div className="bg-[#040008c4] w-full min-h-[100vh] z-[300] flex items-center flex-col justify-center gap-5">
        <h1 className="text-5xl text-cyan-200 text-center text-[250%]  max-[640px]:text-xl font-bold w-[60%]">Transforming Concepts into Seamless User Experiences By Building Websites  <span className="text-purple-400"><br /> With Morden UI</span>.</h1>
    
    <div className="flex flex-col items-center justify-center h-[40vh]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  max-[320px]:text-center text-wrap m-1">
        Claim and get your website and desktop software today.
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
      <a href="#about">
            <MagicButtons title="My services"
            icon={<FaLocationArrow/>}
            position="right"/>
        </a>
        <a href="#about">
            <MagicButtons title="About me"
             icon={<FaLocationArrow/>}
             position="right"/>
         </a>
      </div>
      </div>
    </div>
    </div>
  )
}



