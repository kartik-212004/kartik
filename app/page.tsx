"use client";
import Image from "next/image";
import Experience from "@/components/experience";
import { motion } from "motion/react";
import dynamic from "next/dynamic";
import { Backend, Frontend } from "@/components/Skills";
import { useEffect, useState, useRef } from "react";

const GitHubCalendar = dynamic(() => import("react-github-calendar"), {
  ssr: false,
});

const blurReveal = {
  hidden: {
    opacity: 0,
    y: 50,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  const [calendarFontSize, setCalendarFontSize] = useState(12);
  const [isMounted, setIsMounted] = useState(false);

  const introRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const githubRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);

    const updateFontSize = () => {
      setCalendarFontSize(window.innerWidth < 640 ? 8 : 12);
    };

    updateFontSize();

    window.addEventListener("resize", updateFontSize);

    return () => window.removeEventListener("resize", updateFontSize);
  }, []);

  return (
    <motion.main className="flex flex-col space-y-4">
      <div className="relative py-3 px-1 rounded-sm overflow-hidden">
        <div className="absolute inset-0 bg-[url('/image2.png')] bg-center brightness-75 contrast-[103%] bg-no-repeat bg-cover z-0" />

        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-h2 font-bold"
          >
            Kartik Bhatt
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8 }}
            className="text-base sm:text-lg py-1 font-medium dark:text-text1 text-text2"
          >
            I write bugs and call them features.
          </motion.h2>
        </div>
      </div>

      <motion.div
        ref={introRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={blurReveal}
      >
        <h2 className="text-base sm:text-lg py-3 md:py-1 font-semibold">
          Who Am I ?
        </h2>
        <p className="text-sm sm:text-base md:text-h4 leading-6 sm:leading-7 tracking-wide sm:tracking-widest dark:text-text1 text-text2">
          I’m Kartik Bhatt, a student from Dehradun who loves building with
          code. I’ve done 5+ hackathons, shipped freelance projects, and believe
          in{" "}
          <span className="text-white font-mono font-semibold">
            #BuildInPublic
          </span>
          . I also shitpost and binge planes on Flightradar24.{" "}
          <span className="text-white font-mono font-semibold">Contact Me</span>{" "}
          for freelance work!
        </p>
      </motion.div>

      <motion.div
        ref={educationRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={blurReveal}
      >
        <h2 className="text-base sm:text-lg py-4 md:py-2 font-semibold">
          Education
        </h2>
        <div className="flex flex-row gap-2 justify-between items-center">
          <span className="flex py-2 flex-row gap-2 sm:gap-4 justify-center items-center">
            <Image
              src="/logo.png"
              alt="utu"
              width={50}
              height={50}
              className="w-10 h-10 sm:w-[50px] sm:h-[50px]"
            />
            <div>
              <p className="text-sm sm:text-base">
                Uttarakhand Technical University
              </p>
              <p className="text-[10px] sm:text-[12px] dark:text-text1 text-text2">
                B.Tech in Computer Science and Engineering
              </p>
            </div>
          </span>
          <p className="text-xs sm:text-sm italic dark:text-text1 text-text2">
            2023 - 2027
          </p>
        </div>
      </motion.div>

      <motion.div
        ref={experienceRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={blurReveal}
      >
        <h2 className="text-base sm:text-lg py-4 md:py-2 font-semibold">
          Experience
        </h2>
        <Experience />
      </motion.div>

      <motion.div
        ref={githubRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={blurReveal}
      >
        <div className="w-full overflow-x-auto">
          {isMounted && (
            <GitHubCalendar
              username="kartik-212004"
              fontSize={calendarFontSize}
            />
          )}
        </div>
      </motion.div>

      <motion.div
        ref={skillsRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={blurReveal}
      >
        <h2 className="text-base sm:text-lg py-2 font-semibold">
          Skills
        </h2>
        <div className="flex flex-row gap-2 items-center">
          <Frontend />
        </div>
        <div className="flex flex-row gap-2 items-center">
          <Backend />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, filter: "blur(5px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ delay: 1.5, duration: 1 }}
        whileHover={{
          x: [0, -2, 2, -2, 2, 0],
          transition: {
            duration: 0.2,
            repeat: Infinity,
            repeatType: "loop",
          },
        }}
        className="w-16 sm:w-20 h-1 mx-auto bg-white rounded-full"
      ></motion.div>
    </motion.main>
  );
}
