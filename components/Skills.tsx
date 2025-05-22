import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { motion } from "motion/react";

const frontend = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Typescript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Javascript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Shadcn UI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Magic UI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
];
const backend = [
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Prisma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Drizzle",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
];

export function Frontend() {
  return (
    <div className="flex flex-row gap-2 items-center">
      <Accordion
        type="single"
        collapsible
        defaultValue="item-2"
        className="w-full"
      >
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <motion.p
              className="text-sm sm:text-base"
              whileHover={{
                x: [0, -2, 2, -2, 2, 0],
                transition: {
                  duration: 0.3,
                  repeat: 1,
                  repeatType: "loop",
                },
              }}
            >
              Frontend
            </motion.p>
          </AccordionTrigger>
          <AccordionContent className="text-xs sm:text-sm md:text-md">
            <div className="flex flex-wrap gap-2 ">
              {frontend.map((skill, i) => (
                <motion.p
                  key={i}
                  initial={{
                    opacity: 0.1,
                    scale: 0.3,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: Math.random() * 2,
                    ease: "easeOut",
                  }}
                  className="text-xs sm:text-sm  text-black flex flex-row gap-2 dark:bg-primary2 px-1 sm:px-2 py-0.5 sm:py-1 rounded-md"
                >
                  {skill.name}
                </motion.p>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
export function Backend() {
  return (
    <div className="flex flex-row gap-2 items-center">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <motion.p
              className="text-sm sm:text-base"
              whileHover={{
                x: [0, -2, 2, -2, 2, 0],
                transition: {
                  duration: 0.3,
                  repeat: 1,
                  repeatType: "loop",
                },
              }}
            >
              Backend
            </motion.p>
          </AccordionTrigger>
          <AccordionContent className="text-xs sm:text-sm md:text-md">
            <div className="flex flex-wrap gap-2 sm:gap-2">
              {backend.map((skill, i) => (
                <motion.p
                  key={i}
                  initial={{
                    opacity: 0.1,
                    scale: 0.3,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: Math.random() * 2,
                    ease: "easeOut",
                  }}
                  className="text-xs sm:text-sm text-black flex flex-row  dark:bg-primary2 px-1 sm:px-2 py-0.5 sm:py-1 rounded-md"
                >
                  {skill.name}
                </motion.p>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
