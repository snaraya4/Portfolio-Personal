"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks_project";

export default function Projects() {
  const { ref } = useSectionInView("Projects");
  console.log(projectsData)
  return (
    
    <section ref={ref} id="projects" 
    className="scroll-mt-28 mb-28 ml-10 mr-10 ">
      <SectionHeading>My projects</SectionHeading>
      <div className="flex flex-wrap mt-2 gap-2 sm:mt-auto items-center justify-center jtems-custify-ienter " >
        {projectsData.map((project, index) => (
          
          <React.Fragment key={index}>
            <a href={project.gitLink} target="_blank">
              <Project {...project} />
              </a>
            
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
