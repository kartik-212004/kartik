import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function Home() {
  return (
    <div className="flex flex-col space-y-4 h-screen">
      <h1 className="text-5xl font-bold">Kartik Bhatt</h1>
      <h2 className="text-2xl font-medium">
        I write bugs and call them features.
      </h2>
      <h2 className="text-2xl font-semibold">Who Am I?</h2>
      <p className="text-md leading-relaxed tracking-wide">
        Hi, I&apos;m Kartik Bhatt. I&apos;m a full-stack developer with a strong
        foundation in the MERN stack and experience across various modern tools
        and technologies. I&apos;ve worked on several projects ranging from SaaS
        platforms and multiplayer .
      </p>
      <h2 className="text-2xl font-semibold">Education</h2>
      <div className="flex flex-row gap-2 justify-between items-center">
        <span className="flex flex-row gap-2 justify-center items-center">
          <Image src="/logo.png" alt="utu" width={80} height={80} />
          <p>Uttarakhand Technical University</p>
        </span>
        <p>2023 - 2027</p>
      </div>
      <h2 className=" text-2xl font-semibold ">Experience</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Worked As a frontend dev in the organisation{" "}
          </AccordionTrigger>
          <AccordionContent className="text-md">
            I worked as a frontend developer in the organisation for 2 years. I
            was responsible for the frontend of the organisation. I was
            responsible for the frontend of the organisation. I was responsible
            for the frontend of the organisation. I was responsible for the
            frontend of the organisation.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent className="text-md">
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
