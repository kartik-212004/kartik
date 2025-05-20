"use client";
import Image from "next/image";
import Experience from "@/components/experience";
import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";
import { Backend, Frontend } from "@/components/Skills";

const fadeUp = {
  initial: { opacity: 0, y: 50, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.6 },
};

export default function Home() {
  return (
    <motion.main
      className="flex flex-col space-y-4"
      initial="initial"
      animate="animate"
    >
      <motion.h1
        variants={fadeUp}
        transition={{ duration: 1 }}
        className="text-h1 font-bold"
      >
        Kartik Bhatt
      </motion.h1>

      <motion.h2
        variants={fadeUp}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-lg py-1 font-medium dark:text-text1 text-text2"
      >
        I write bugs and call them features.
      </motion.h2>

      <motion.div variants={fadeUp} transition={{ delay: 0.3 }}>
        <h2 className="text-lg py-1 font-semibold">Who Am I?</h2>
        <p className="text-h4 leading-7  tracking-widest dark:text-text1 text-text2">
          Hi, I&apos;m Kartik Bhatt. I&apos;m a full-stack developer with a
          strong foundation in the MERN stack and experience across various
          modern tools and technologies. I&apos;ve worked on several projects
          ranging from SaaS platforms and multiplayer .
        </p>
      </motion.div>

      <motion.div variants={fadeUp} transition={{ delay: 0.4 }}>
        <h2 className="text-lg py-1 font-semibold">Education</h2>
        <div className="flex flex-row gap-2 justify-between items-center">
          <span className="flex py-2 flex-row gap-4 justify-center items-center">
            <Image src="/logo.png" alt="utu" width={50} height={50} />
            <div>
              <p>Uttarakhand Technical University</p>
              <p className="text-[12px] dark:text-text1 text-text2">
                B.Tech in Computer Science and Engineering
              </p>
            </div>
          </span>
          <p className="text-xm italic dark:text-text1 text-text2">
            2023 - 2027
          </p>
        </div>
      </motion.div>

      <motion.div variants={fadeUp} transition={{ delay: 0.5 }}>
        <h2 className="text-lg py-2 font-semibold">Experience</h2>
        <motion.div variants={fadeUp}>
          <Experience />
        </motion.div>
      </motion.div>

      <motion.div variants={fadeUp} transition={{ delay: 0.6 }}>
        <div className="w-full overflow-x-auto">
          <GitHubCalendar username="kartik-212004" width="100%" fontSize={12} />
        </div>
      </motion.div>

      <motion.div variants={fadeUp} transition={{ delay: 0.7 }}>
        <h2 className="text-lg py-2 font-semibold">Skills</h2>
        <motion.div
          variants={fadeUp}
          className="flex flex-row gap-2 items-center"
        >
          <Frontend />
        </motion.div>
        <motion.div
          variants={fadeUp}
          className="flex flex-row gap-2 items-center"
        >
          <Backend />
        </motion.div>
      </motion.div>
    </motion.main>
  );
}
