"use client";
import { projects } from "./info/objects";
import Image from "next/image";
import { motion } from "motion/react";

const blurReveal = {
  hidden: { opacity: 0, y: 50, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Project() {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 gap-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={blurReveal}
    >
      {projects.map((project, index) => (
        <div
          key={index}
          className="border border-border dark:border-borderDark dark:bg-[#0a0c0e] p-4 rounded-xl shadow-md backdrop-blur-md bg-transparent flex flex-col h-full"
        >
          <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover rounded-md"
            />
          </div>
          <h3 className="text-sm sm:text-base font-semibold text-black dark:text-white">
            {project.name}
          </h3>
          <p className="text-xs sm:text-sm md:text-md text-gray-700 dark:text-text1 py-1">
            {project.techStack}
          </p>
          <p className="text-xs sm:text-sm md:text-md text-gray-800 dark:text-text1 py-1 flex-grow">
            {project.description}
          </p>
          <div className="flex gap-3 pt-4 mt-auto">
            {project.live ? (
              <a
                href={
                  project.live.startsWith("http")
                    ? project.live
                    : `https://${project.live}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs sm:text-sm dark:bg-[#121618] text-black dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-[#161a1d] transition-colors duration-200"
              >
                Live Demo
              </a>
            ) : (
              <span className="px-4 py-2 text-xs sm:text-sm bg-gray-100 dark:bg-[#121618] text-gray-500 dark:text-gray-400 rounded-md cursor-not-allowed">
                Live Demo Not Available
              </span>
            )}
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs sm:text-sm  dark:bg-[#121618] text-black dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-[#161a1d] transition-colors duration-200"
            >
              GitHub
            </a>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
