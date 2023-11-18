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
      I am a motivated <span className="font-semibold">Software Engineer</span> holding a <span className="font-semibold">Master's degree in Computer Science</span> from <span className="font-semibold">Binghamton University - SUNY</span>, accompanied by <span className="font-semibold">over 2 years of experience</span> in the industry. My expertise spans the <span className="font-semibold">entire software development lifecycle</span>, from adeptly gathering requirements to <span className="font-semibold">proficiently programming</span> and maintaining systems. I possess a strong command of <span className="font-semibold">Object-Oriented Programming (OOP) principles, design patterns, and Agile methodologies</span>. Additionally, I specialize in crafting <span className="font-semibold">responsive web applications</span> and developing <span className="font-semibold">automation tools</span>. My knack for <span className="font-semibold">creative web design</span> is evident through my <span className="font-semibold">project portfolio</span>. Committed to continual learning, I confidently <span className="font-semibold">tackle complex challenges</span>, delivering <span className="font-semibold">top-notch solutions</span>.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy 
        watching movies and learning new things. 
      </p>
    </motion.section>
  );
}
