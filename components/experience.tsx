"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "motion/react";

export default function ExperienceAccordion() {
  return (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value="softtech">
        <AccordionTrigger>
          <motion.p
            className="text-sm sm:text-base"
            whileHover={{
              x: [0, -2, 2, -2, 2, 0],
              transition: { duration: 0.3, repeat: 1, repeatType: "loop" },
            }}
          >
            SoftTech Bengaluru – Web Grid
          </motion.p>
        </AccordionTrigger>
        <AccordionContent className="text-xs sm:text-sm md:text-md">
          <p className="whitespace-nowrap">
            Built animated homepage UI and improved Git skills via PRs and
            branching.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="coffee-web-saas">
        <AccordionTrigger>
          <motion.p
            className="text-sm sm:text-base"
            whileHover={{
              x: [0, -2, 2, -2, 2, 0],
              transition: { duration: 0.3, repeat: 1, repeatType: "loop" },
            }}
          >
            Coffee-Web-SaaS – Freelance
          </motion.p>
        </AccordionTrigger>
        <AccordionContent className="text-xs sm:text-sm md:text-md">
          <p className="whitespace-nowrap">
            Built Stripe subscriptions and connected backend with NoSQL DB.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="hacktoberfest">
        <AccordionTrigger>
          <motion.p
            className="text-sm sm:text-base"
            whileHover={{
              x: [0, -2, 2, -2, 2, 0],
              transition: { duration: 0.3, repeat: 1, repeatType: "loop" },
            }}
          >
            Hacktoberfest 2024 – Open Source
          </motion.p>
        </AccordionTrigger>
        <AccordionContent className="text-xs sm:text-sm md:text-md">
          <p className="whitespace-nowrap">
            Contributed to OSS, fixed bugs, and improved Git/GitHub workflows.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
