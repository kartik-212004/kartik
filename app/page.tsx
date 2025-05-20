"use client";
import Image from "next/image";
import Experience from "@/components/experience";
import { motion } from "motion/react";
import GitHubCalendar from "react-github-calendar";
import { Backend, Frontend } from "@/components/Skills";
export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.5 }}
      className="flex flex-col space-y-4"
    >
      <h1 className="text-5xl font-bold">Kartik Bhatt</h1>
      <h2 className="text-2xl py-4 font-medium dark:text-text1 text-text2">
        I write bugs and call them features.
      </h2>
      <h2 className="text-2xl py-1 font-semibold">Who Am I?</h2>
      <p className="text-md leading-7 tracking-widest dark:text-text1 text-text2">
        Hi, I&apos;m Kartik Bhatt. I&apos;m a full-stack developer with a strong
        foundation in the MERN stack and experience across various modern tools
        and technologies. I&apos;ve worked on several projects ranging from SaaS
        platforms and multiplayer .
      </p>
      <h2 className="text-2xl py-1  font-semibold">Education</h2>
      <div className="flex flex-row gap-2 justify-between items-center">
        <span className="flex flex-row gap-2 justify-center items-center">
          <Image src="/logo.png" alt="utu" width={50} height={50} />
          <div>
            <p>Uttarakhand Technical University</p>
            <p className="text-[12px] dark:text-text1 text-text2">
              B.Tech in Computer Science and Engineering
            </p>
          </div>
        </span>
        <p className="text-sm italic dark:text-text1 text-text2">2023 - 2027</p>
      </div>
      <h2 className=" text-2xl py-1  font-semibold ">Experience</h2>
      <Experience />
      <div className="w-full overflow-x-auto">
        <GitHubCalendar username="kartik-212004" width="100%" fontSize={12} />
      </div>
      <h2 className="text-2xl py-1  font-semibold ">Skills</h2>
      <div>
        <div className="flex flex-row gap-2 items-center">
          <Frontend />
        </div>

        <div className="flex flex-row gap-2 items-center">
          <Backend />
        </div>
      </div>
    </motion.main>
  );
}
