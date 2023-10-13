"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I'm a motivated software engineer with a Master's in Computer Science from Binghamton University and over 2 years of work experience. I specialize in full-stack development with React and Node.js.

I excel in the entire software development lifecycle, from requirements gathering to maintenance. I'm well-versed in OOP principles, design patterns, and Agile methodologies.

I'm also skilled in creating responsive web applications and automation tools.

I have a creative eye for web design, demonstrated by my projects. Committed to continuous learning, I'm confident in tackling complex challenges and delivering top-notch solutions.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy 
        watching movies and learning new things. 
      </p>
    </motion.section>
  );
}
