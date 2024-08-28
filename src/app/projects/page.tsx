import Experience from "@/components/Experience";
import {
  childVariants,
  containerVariants,
  MotionDiv,
  MotionHeader,
} from "@/components/MotionDiv";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/staticdata/projects";
import React from "react";

const Projects = () => {
  return (
    <MotionHeader
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full min-h-[60vh]"
    >
      <MotionDiv variants={childVariants} className="mb-4">
        <h2 className="text-2xl mb-2 font-bold">Experience</h2>
        <Experience />
      </MotionDiv>
      <MotionHeader
        variants={childVariants}
        className="flex items-center justify-between"
      >
        <h1 className="font-bold text-2xl">My Projects</h1>
        <a
          href="https://github.com/nilaachandra?tab=repositories"
          target="_blank"
          className="underline text-blue-600"
        >
          More on Github
        </a>
      </MotionHeader>
      <div className="flex flex-col gap-3 mt-4">
        {projects.map((project) => (
          <MotionHeader
            variants={childVariants}
            className="flex flex-col gap-2"
            key={project.title}
          >
            <ProjectCard
              skills={project.skills}
              status={project.status}
              title={project.title}
              githubURL={project.githubURL}
              linkURL={project.linkURL}
              description={project.description}
              image={project.image}
            />
          </MotionHeader>
        ))}
      </div>
    </MotionHeader>
  );
};

export default Projects;
