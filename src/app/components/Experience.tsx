"use client";
import React, { useRef } from "react";
import { Details } from "./Details";
import { motion, useScroll } from "framer-motion";
import EXPERIENCE from "../constant/experience";
export const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <section id="experience">
      <h2 className="font-bold text-4xl w-full text-center mb-12">
        Experience
      </h2>
      <div className="md:w-[75%] mx-auto relative" ref={ref}>
        <motion.div
          className="absolute xl:left-28 left-9 top-0 w-[4px] h-full bg-dark origin-top"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between md:ml-4">
          {EXPERIENCE.map((exp, index) => (
            <Details
              key={index}
              position={exp.position}
              company={exp.company}
              companyLink={exp.companyLink}
              time={exp.time}
              address={exp.address}
              work={exp.work}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};
