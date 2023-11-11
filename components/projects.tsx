"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks_project";

export default function Projects() {
  const { ref } = useSectionInView("Projects");
  return (
    
    <section ref={ref} id="projects" 
    className="scroll-mt-28 mb-28 ml-10 mr-10 ">
      <SectionHeading>Featured projects</SectionHeading>
      <p className="flex place-content-center text-2xl mb-4">See a full list of my projects here :<a className="flex px-2 focus:scale-[1.15] hover:scale-[1.15] cursor-pointer active:scale-105 transition text-3xl items-center" href="https://github.com/snaraya4"
          target="_blank"><FaGithubSquare/></a>
      </p>
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
