import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function Grid() {
  return (
    <BentoGrid className="max-w-full  pb-[100px]  px-[10px] max-[390px]:px-[10px] max-[750px]:px-[100px] bg-indigo-950 max-[320px]:px-0">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}

    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-slate-800 to-neutral-100">
  </div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "I prioritize client collaboration, fostering open communication.",
    header: <img src="/b1.svg" alt="" className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-slate-800 to-neutral-100" />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "AI Intergration",
    description: "AI integration to increase perfomance and funtionality",
    header: <img src="/iot.jpg" alt="" className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-slate-800 to-neutral-100" />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Tech enthusiast with a passion for development",
    header: <img src="/tech.gif" alt="" className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-slate-800 to-neutral-100" />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "My web stack",
    description: "Web technologies that i use to develop websites",
    stack: [
        "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind.css", "Django", "Express"
      ],
    header: <div className="relative mx-auto">
        { [
        "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind.css", "Django", "Express"
      ].map((i)=>(
        <p className="inline-block p-1 min-w-[40%] rounded bg-[#150e16b8] transition duration-500 hover:scale-105 hover:bg-purple-700 text-slate-300 text-center font-bold m-2 my-1">{i}</p>
      ))}
    </div>,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "A Junior Ethical Hacker",
    description:
     "Currently persuing Certified Ethical Hacker in EC-Council",
    header: <img src="/hack.jpg" alt="" className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-slate-800 to-neutral-100" />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries on trending technologies",
    header: <img src="/code.jpg" alt="" className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-slate-800 to-neutral-100" />,
    stack: [
        "Data Scince", "Desktop App development", "AI Evolution", "PyQt GUI"
      ],
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Other programming languages",
    description: "Currently progressing in software development",
    
      header: <div className="relative mx-auto">
        {  [
        "Python", "C# & .Net", "C++", "React Native", "Hacking", "PyQt GUI"
      ].map((i)=>(
        <p className="inline-block p-1 min-w-[40%] rounded bg-[#150e16b8] transition duration-500 hover:scale-105 hover:bg-purple-700 cursor-pointer text-slate-300 text-center font-bold m-2">{i}</p>
      ))}
    </div>,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
 
];
