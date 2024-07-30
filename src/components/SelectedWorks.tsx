import projects from "@/staticdata/projects";
import React from "react";
import { LuGithub, LuLink } from "react-icons/lu";
import {
  SiJavascript,
  SiLlvm,
  SiMeta,
  SiNextdotjs,
  SiReact,
  SiReactquery,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import ProjectCard from "./ProjectCard";
const SelectedWorks = () => {
  return (
    <div>
      <h1 className="font-bold text-lg mb-3">Selected Works 👨🏻‍💻</h1>
      <div className="flex flex-col gap-2">
        {projects.slice(0, 3).map((project) => (
          <div className="" key={project.id}>
            <ProjectCard
              skills={project.skills}
              status={project.status}
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
  );
};

export default SelectedWorks;
