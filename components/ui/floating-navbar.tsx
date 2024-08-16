"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex w-[60%]  fixed top-10 inset-x-0 mx-auto border h-[70px] border-transparent dark:border-white/[0.2] rounded-full  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 font-semibold  items-center navigation justify-center space-x-4 bg-slate-950 max-[985px]:w-[80%] max-[730px]:w-[96%] max-[660px]:flex-col max-[660px]:h-[100vh] max-[660px]:justify-around max-[660px]:w-[120px] max-[660px]:items-center max-[660px]:text-center  max-[660px]:pl-0 max-[660px]:pr-5  max-[660px]:mx-3 max[660px]:top-10",
          className
        )}
      >
        <img src="/logo.svg" alt="" />
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center text-center flex space-x-1 text-white dark:hover:text-neutral-300 hover:text-purple-600 transition duration-500 hover:scale-110 max-[645px]:text-center max-[645px]:w-full max-[645px]:h-[30px] max-[645px]:text-white max-[645px]:text-sm max-[645px]:z-[1233]"
            )}
          >
            <span className="block ">{navItem.icon}</span>
            <span className=" w-full text-center sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
        <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          <span>
            <Link href="/signUp">SignUp</Link>
          </span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
