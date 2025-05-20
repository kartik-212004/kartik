import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

import { Accordion } from "./ui/accordion";

export default function Experience() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <p>Worked As a frontend dev in the organisation</p>
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
          <p>Is it styled?</p>
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
