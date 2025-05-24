import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "motion/react";

export default function ExperienceAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="softtech">
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
            SoftTech Bengaluru – Web gird
          </motion.p>
        </AccordionTrigger>
        <AccordionContent className="text-xs sm:text-sm md:text-md">
          <p>
            <strong>Tech Stack:</strong> Next.js, Turborepo, Tailwind CSS,
            React, Docker, Shadcn UI. <br />I built the homepage with animations
            and improved the UI. I worked closely with experienced devs, learned
            to manage PRs, resolve merge conflicts, and use Git branches. It
            really improved my version control and teamwork skills.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="coffee-web-saas">
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
            Coffee-Web-SaaS – Freelance Project
          </motion.p>
        </AccordionTrigger>
        <AccordionContent className="text-xs sm:text-sm md:text-md">
          <p>
            <strong>Tech Stack:</strong> React, MERN Stack, Stripe, Shadcn UI.{" "}
            <br />I built a Stripe-based subscription model, used webhooks, and
            connected everything to a NoSQL database.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="hacktoberfest">
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
            Hacktoberfest 2024 – Open Source
          </motion.p>
        </AccordionTrigger>
        <AccordionContent className="text-xs sm:text-sm md:text-md">
          <p>
            I contributed to 5 open source repositories by fixing bugs and
            adding features. It helped me sharpen my Git and GitHub skills, and
            taught me how to collaborate effectively on shared codebases.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
