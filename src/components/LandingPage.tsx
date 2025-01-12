import React from "react";
import { FaSignature } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import projects from "@/staticdata/projects";

const LandingPage = () => {
  return (
    <section className="w-full">
      <div>
        <h1 className="font-instrumentSerif text-4xl font-bold italic">
          <span className="text-blue-800">Nilaa</span> Laishram
        </h1>
        <p className="text-zinc-700">next js dev ⠙ frontend ⠙ design</p>
      </div>

      <div className="mt-6">
        <p className="text-[14px]">
          hey there, i&apos;m Nilaa. i&apos;ve been diving deep into the world
          of web development, blending my skills of frontend and design. My
          expertise lies in crafting intuitive and visually appealing Uis, with
          a focus on React, Next.js, and TypeScript. When i&apos;m not immersed
          in code, you&apos;ll probably find me enjoying a game of football or
          catching up on the latest matches. if you&apos;ve got an exciting
          opportunity, let&apos;s connect—i&apos;m just a DM away on Twitter!
        </p>
      </div>
      <button className="flex h-9 items-center bg-blue-800 text-white dark:bg-white hover:opacity-90 dark:text-black px-2.5 font-semibold mt-3 rounded-md">
        sign my guestbok <FaSignature size={24} />
      </button>
      <div className="mt-6">
        <h1 className="font-instrumentSerif font-bold text-3xl italic text-blue-800 mb-4">
          some projects i&apos;ve built
        </h1>
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-3">
          {projects.slice(0, 10).map((project) => (
            <div className="" key={project.id}>
              <ProjectCard
                title={project.title}
                githubURL={project.githubURL}
                linkURL={project.linkURL}
                description={project.description}
                image={project.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
