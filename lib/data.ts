import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import {AiOutlineFundProjectionScreen } from "react-icons/ai";
import { LuGraduationCap } from "react-icons/lu";
import calculatorApp from "@/public/calculatorApp.png";
import ecommerce from "@/public/ecommerce.png";
import netflixClone from "@/public/netflixClone.png";
import passwordGenerator from "@/public/passwordGenerator.png";
import tictactoe from "@/public/tictactoe.png";
import weatherApp from "@/public/weatherApp.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Grad Student",
    location: "Binghamton University - SUNY",
    description:
      "During my academic journey, I excelled in a diverse array of relevant courses.",
    icon: React.createElement(LuGraduationCap),
    date: "Jan 2022 - Dec 2023",
  },
  {
    title: "Security Development Engineer",
    location: "Ford Motor Private Limited, Chennai, INDIA",
    description:
      "Created responsive web applications and alert systems. ",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2020 - Jan 2022",
  },
  {
    title: "Project Intern",
    location: "ANURAG Lab, DRDO, Hyderabad, INDIA",
    description:
      "Through an in-depth exploration of literature and hands-on experimentation, I thoroughly examined the operation and structure of Time Interleaving Pipeline ADCs. ",
    icon: React.createElement(AiOutlineFundProjectionScreen),
    date: "Jan 2020 - Mar 2020",
  },
  {
    title: "Undergrad Student",
    location: "Amrita School of Engineering, Bengaluru, INDIA",
    description:
      "I pursued my Bachelor of Engineering in Electronics and Communication Engineering at Amrita School of Engineering in Bengaluru, India.", 
      // The program encompassed a range of pertinent coursework including Computer Programming, Data Communication and Networks, Network Theory, Microprocessor and Microcontrollers, Information Theory and Coding Techniques, and Embedded Systems.
    icon: React.createElement(LuGraduationCap),
    date: "Jul 2016 - May 2020",
  },
] as const;

export const projectsData = [
  {
    title: "Weather App",
    description:
      "Dynamic weather app: Enter any city to instantly view temperature, humidity, and wind speed details.",
    tags: ["React.js", "API Integration", "HTML", "CSS", "JavaScript"],
    imageUrl: weatherApp,
    gitLink:"https://snaraya4.github.io/Weather_App/",
  },
  {
    title: "Calculator App",
    description:
      "The Basic Calculator App provides a user-friendly interface for performing basic arithmetic operations. It offers real-time feedback and includes convenient features.",
    tags: ["HTML", "JavaScript", "CSS"],
    imageUrl: calculatorApp,
    gitLink:"https://snaraya4.github.io/Calculator-App/",
  },
  {
    title: "Ecommerce Website",
    description:
      "An e-commerce website offering an online shopping experience with user authentication, cart management, and secure payment processing.",
    tags: ["React.js", "HTML", "CSS", "JavaScript"],
    imageUrl: ecommerce,
    gitLink:"https://snaraya4.github.io/Ecommerce-Website/",
  },
  {
    title: "Netflix Clone",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "CSS", "JavaScript"],
    imageUrl: netflixClone,
    gitLink:"https://snaraya4.github.io/Netflix-Clone/",
  },
  {
    title: "Password Generator",
    description:
      "Developed a user-friendly password generator app, offering one-click access to create secure 12-character passwords that enhances your online security effortlessly.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: passwordGenerator,
    gitLink:"https://snaraya4.github.io/Password-Generator/",
  },
  {
    title: "Tic Tac Toe Game",
    description:
      "Online Tic Tac Toe: Enjoy classic gameplay with friends in this web-based multiplayer experience.",
    tags: ["React.js", "HTML", "CSS", "JavaScript"],
    imageUrl: tictactoe,
    gitLink:"https://snaraya4.github.io/TicTacToe/",
  },
  
] as const;

export const skillsData = [
  "HTML",
  "XML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Vue.js",
  "React Native",
  "Git",
  "Rest API",
  "Tailwind",
  "PHP",
  "MongoDB",
  "PowerBI",
  "Figma",
  "DevOps",
  "Agile",
  "Scrum",
  "MySQL",
  "PostgreSQL",
  "Postman",
  "Jenkins",
  "Linux",
  "Unix",
  "PowerShell",
  "Docker",
  "Kubernetes",
  "Spring Boot",
  "Python",
  "Java",
  "C/C++",
  "Framer Motion",
] as const;
