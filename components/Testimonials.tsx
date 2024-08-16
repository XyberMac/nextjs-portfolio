"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { testimonials } from "@/data";
import Title from "./Title";

export function Testimonials() {
  return (
    <div id='testimonials' className="h-[100vh] rounded-md flex flex-col pb-4 antialiased dark:bg-indigo-950 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <Title image="/testimonials-pic.png"/>
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="slow"
      />
    </div>
  );
}
