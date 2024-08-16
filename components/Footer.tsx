"use client";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        Tech-Rehalm
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        The hidden germ for your web services
      </p>
      <div className='w-full flex items-end  justify-evenly h-[300px] absolute bottom-5 max-[620px]:flex-col '>
      <div className="text-2xl text-white max-[620px]:text-sm max-[620px]:font-semibold max-[620px]:hidden  text-center">All Rights Reserved</div>
      <div className="flex w-[40%] items-center justify-evenly max-[620px]:w-full max-[620px]:absolute bottom-0 mx-auto text center ">
        <Link href="/www.facebook.com/profile.php?id=100090647258011"><FaSquareFacebook className='text-3xl cursor-pointer transition duration-500 hover:scale-105 text-slate-300 hover:text-slate-100'/></Link>
        <Link href="/x.com/Mac368383586254"><FaSquareXTwitter className='text-3xl cursor-pointer transition duration-500 hover:scale-105 text-slate-300 hover:text-slate-100'/></Link>
        <Link href="/www.instagram.com/xyber_mac/"><FaInstagramSquare className='text-3xl cursor-pointer transition duration-500 hover:scale-105 text-slate-300 hover:text-slate-100'/></Link>
        <Link href="/github.com/XyberMac"><FaSquareGithub className='text-3xl cursor-pointer transition duration-500 hover:scale-105 text-slate-300 hover:text-slate-100'/></Link>
      </div>
      <h2 className="text-2xl text-white max-[620px]:text-sm max-[620px]:font-semibold max-[620px]:hidden text center">Tech-Rehalm</h2>
    </div>
    </div>
  );
}