"use client";
import { motion } from "motion/react";
const fadeUp = {
  initial: { opacity: 0, y: 50, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.6 },
};
export default function Blog() {
  return (
    <motion.main
      className="flex flex-col space-y-4"
      initial="initial"
      animate="animate"
    >
      <motion.h1
        variants={fadeUp}
        transition={{ duration: 1 }}
        className="text-h2 font-bold"
      >
        Blog
      </motion.h1>
      <h1></h1>
    </motion.main>
  );
}
