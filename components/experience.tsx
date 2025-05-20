import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function ExampleAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <motion.p
            whileHover={{
              x: [0, -2, 2, -2, 2, 0],
              transition: {
                duration: 0.3,
                repeat: 1,
                repeatType: "loop",
              },
            }}
          >
            Worked As a frontend dev in the organisation
          </motion.p>
        </AccordionTrigger>
        <AccordionContent className="text-md">
          <p>
            I worked as a frontend developer in the organisation for 2 years. I
            was responsible for the frontend of the organisation. I was
            responsible for the frontend of the organisation. I was responsible
            for the frontend of the organisation. I was responsible for the
            frontend of the organisation.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>
          <motion.p
            whileHover={{
              x: [0, -2, 2, -2, 2, 0],
              transition: {
                duration: 0.3,
                repeat: 1,
                repeatType: "loop",
              },
            }}
          >
            Is it styled?
          </motion.p>
        </AccordionTrigger>
        <AccordionContent className="text-md">
          <p>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
