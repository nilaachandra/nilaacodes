import { ReactNode } from "react"
import { LuGithub, LuLink } from "react-icons/lu"
import { SiNextdotjs } from "react-icons/si"

interface CardProps {
    children: ReactNode;
    title?: string;
    description?: string;
    openSource?: boolean;
    personal?: boolean;
    linkURL?: string;
    githubURL?: string;
    building?: string;
    running?: boolean;
    acquired?: boolean;
    discontinued?: boolean;
}
const ProjectCard = ( ) => {
  return (
    <div className="project border dark:border-white border-black p-3 rounded-lg">
        <div className="title flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold">{ }</h1>
            <span
             className="cursor-pointer transition-all duration-200 
             hover:dark:bg-white hover:dark:text-black hover:bg-black
              hover:text-white border border-black dark:border-white px-2 text-sm rounded-md p-0.5"
            >
              Open Source
            </span>
            <span
              className="cursor-pointer transition-all duration-200 
             hover:dark:bg-white hover:dark:text-black hover:bg-black
              hover:text-white border border-black dark:border-white px-2 text-sm rounded-md p-0.5"
            >
              Personal
            </span>
          </div>
          <div className="div flex items-center gap-3">
            <a href="" className="text-blue-700">
              <LuLink size={20} />
            </a>
            <a href="" className="">
              <LuGithub size={20} />
            </a>
          </div>
        </div>
        <p>
          27 Days is a generative AI powered gamified platform where you can
          start your journey of getting rid from an addiction you have.
        </p>
        <p className="text-sm">
          Status: <span>Building</span>
        </p>

        <div className="skills flex gap-2 flex-wrap mt-2">
        <div
          className="cursor-pointer transition-all duration-200 
             hover:dark:bg-white hover:dark:text-black hover:bg-black
              hover:text-white flex items-center justify-center gap-1 border border-black dark:border-white px-2 rounded-md lg:text-base text-sm"
        >
          <SiNextdotjs size={18} />
          <p className="tracking-tight leading-normal">Next JS</p>
        </div>

     
        </div>
      </div>
  )
}

export default ProjectCard