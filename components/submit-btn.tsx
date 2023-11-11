import React from "react";
import { motion } from "framer-motion";
import { FaGithubSquare, FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { HiExternalLink } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <motion.div
    className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay: 0.1,
    }}
  >
    

    <a
      className="bg-white p-4 text-gray-900 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 h-[3rem] w-[10rem]"
      href="https://docs.google.com/document/d/1F-5GanTkSTkhAjMEvW9sCEaxBsobeZVz/edit?usp=sharing&ouid=104353804556173420084&rtpof=true&sd=true"
      target="_blank"
    >
      My Resume{" "}
      <HiExternalLink className="opacity-60 group-hover:translate-y-1 transition " />
    </a>

    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-90 dark:text-black/90 disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
      
    </button>

    <a
      className="bg-white p-4 text-gray-900 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
      href="https://www.linkedin.com/in/sravya-narayana"
      target="_blank"
    >
      <BsLinkedin />
    </a>

    <a
      className="bg-white p-4 text-gray-900 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
      href="https://github.com/snaraya4"
      target="_blank"
    >
      <FaGithubSquare />
    </a>
  </motion.div>
    
  );
}
