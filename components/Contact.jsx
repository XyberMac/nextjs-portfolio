"use client"

import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { useState } from 'react';
import Title from './Title';

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "951966d0-4c89-44d5-9994-141b01990e40");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div  id='contact' className="flex flex-col bg-indigo-950">
      <Title image='contact-pic.png'/>
    <div className='w-full flex items-center justify-evenly px-3  min-h[100vh] mb-8  max-[700px]:flex-col' >
      <div className="fle fle-col items-center justify-evenly w-[40%] max-[700px]:w-[70%] max-[275px]:w-full">
        <div className="flex items-center max-[275px]:w-[95%] justify-center gap-3 flex-col  rounded-md cursor-pointer transition duration-500 hover:scale-105 hover:shadow-lg hover:shadow-slate-950 w-full h-[150px] bg-slate-800  ">
        <MdEmail className='text-3xl text-indigo-600'/>
            <p className="text-purple-300 text-center">makhosin27@gmail.com</p>
        </div>
        <div className="flex items-center max-[275px]:w-[95%] justify-center gap-3 w-full  rounded-md cursor-pointer transition duration-500 hover:scale-105 hover:shadow-lg hover:shadow-slate-950  flex-col bg-slate-800 my-3 h-[100px] ">
        <FaLocationDot className='text-3xl text-indigo-600'/>
            <p className="text-purple-300 text-center">Bulawayo Zimbabwe</p>
        </div>
        <div className="flex items-center max-[275px]:w-[95%] justify-center gap-3 w-full  rounded-md cursor-pointer transition duration-500 hover:scale-105 hover:shadow-lg hover:shadow-slate-950  flex-col bg-slate-800  h-[100px] ">
        <FaWhatsappSquare className='text-3xl text-indigo-600'/>
            <p className="text-purple-300 text-center">+263 78 838 3289</p>
        </div>
      </div>
      <div className="w-[50%] p-2 max-[700px]:w-[80%] max-[300px]:w-[95%]">
        <form onSubmit={onSubmit} className='w-[90%] p-4 bg-gray-800 max-[275px]:w-[95%]'>
            <input type="text" name="name" id="name" placeholder='Full name' className='w-full rounded-sm p-2 my-2 bg-slate-300 text-slate-950'/>
            <input type="text" name="name" id="name" placeholder='Your email' className='w-full rounded-sm p-2 my-2 bg-slate-300 text-slate-950'/>
            <textarea   name="name" id="name" placeholder='Your message here' className='w-full min-h-[200px] rounded-sm p-2 my-2 bg-slate-300 text-slate-950'/>
            <button className="w-[200px] h-[40px] m-auto text-center cursor-pointer bg-slate-900 text-purple-300 font-bold block max-[380px]:w-[80%] transition duration-500 hover:scale-110 hover:bg-fuchsia-700 hover:rounded-md">Send</button>
        </form>
        <span className='text-white font-semibold block m-auto'>{result}</span>
      </div>
    </div>
    </div>
  )
}
