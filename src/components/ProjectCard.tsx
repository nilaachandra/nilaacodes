import Image from "next/image";
import { ReactNode } from "react";
import { LuGithub, LuLink } from "react-icons/lu";
import Status from "./Status";

interface CardProps {
  children?: ReactNode;
  image?: string;
  title?: string;
  description?: string;
  linkURL?: string;
  githubURL?: string;
  status: Status;
  skills: string[];
}

const ProjectCard: React.FC<CardProps> = ({
  children,
  image,
  title,
  description,
  linkURL,
  githubURL,
  status,
  skills,
}) => {
  return (
    <div className="bg-zinc-200/50 dark:bg-zinc-900 cursor-pointer p-2 rounded-md">
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center h-full gap-3">
          <Image
            src={image || "/default-image.png"} // Use a default image if image is not provided
            height={65}
            width={65}
            alt={title || "Project Image"} // Provide a meaningful alt text
            className="rounded-md"
          />
          <div className="w-[647px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h1 className="font-semibold text-xl">{title}</h1>
                <Status status={status} />
              </div>
              <div className="flex items-center gap-3">
                {linkURL && (
                  <a href={linkURL} target="_blank" aria-label="Project Link">
                    <LuLink size={20} />
                  </a>
                )}
                {githubURL && (
                  <a href={githubURL} target="_blank" aria-label="GitHub Repository">
                    <LuGithub size={20} />
                  </a>
                )}
              </div>
            </div>
            <p className="text-sm leading-none mt-2">{description}</p>
          </div>
        </div>
        <div className="flex gap-2 text-xs mt-2 w-full flex-wrap">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="dark:bg-zinc-700 bg-zinc-300 rounded-sm px-1 py-0.5"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
