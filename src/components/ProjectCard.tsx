"use client";
import { LuGithub } from "react-icons/lu";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "next-view-transitions";

interface CardProps {
  children?: React.ReactNode;
  image?: string;
  title?: string;
  description?: string;
  linkURL?: string;
  githubURL?: string;
}

const ProjectCard: React.FC<CardProps> = ({
  children,
  image,
  title,
  description,
  linkURL,
  githubURL,
}) => {
  const handleClick = () => {};
  return (
    <Card
      onClick={handleClick}
      className="flex flex-col w-full h-[144px] p-2 bg-zinc-100 hover:bg-zinc-200 transition-all duration-200 cursor-pointer group"
    >
      <CardContent className="flex p-0 w-full justify-between text-blue-500">
        <img
          src={image}
          alt={`${title} logo`}
          className="rounded-lg h-[64px] w-[64px]"
        />
        <div className="flex gap-3">
          <Link
            href={linkURL || "/"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            {" "}
            <FiArrowUpRight className="h-[1.2rem] w-[1.2rem] transition-transform duration-200 ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:rotate-12" />
          </Link>
          <Link
            href={githubURL || "/"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            {" "}
            <LuGithub className="h-[1.2rem] w-[1.2rem] transition-transform duration-200 ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:rotate-12" />
          </Link>
        </div>
      </CardContent>
      <div className="flex-1 flex flex-col">
        <CardHeader className="p-0">
          <div className="mb-1 flex justify-between items-center"></div>
        </CardHeader>
        <CardTitle className="font-bold text-sm">{title} </CardTitle>
        <CardDescription className="text-xs line-clamp-2 text-zinc-600 mb-1">
          {description}
        </CardDescription>
      </div>
    </Card>
  );
};

export default ProjectCard;
