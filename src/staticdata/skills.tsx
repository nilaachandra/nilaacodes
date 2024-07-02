import React, { ReactNode } from "react";
import {
  SiNextdotjs,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiSupabase,
  SiFirebase,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVercel,
  SiFigma,
  SiAdobephotoshop,
  SiReactquery,
} from "react-icons/si";

type Skill = {
  skillName: string;
  skillIcon: ReactNode;
};

const skills: Skill[] = [
  { skillName: "Next.js", skillIcon: <SiNextdotjs /> },
  { skillName: "React", skillIcon: <SiReact /> },
  { skillName: "JavaScript", skillIcon: <SiJavascript /> },
  { skillName: "TypeScript", skillIcon: <SiTypescript /> },
  { skillName: "Tailwind CSS", skillIcon: <SiTailwindcss /> },
  { skillName: "Tanstack React Query", skillIcon: <SiReactquery /> },
  { skillName: "Node.js", skillIcon: <SiNodedotjs /> },
  { skillName: "Express", skillIcon: <SiExpress /> },
  { skillName: "Python", skillIcon: <SiPython /> },
  { skillName: "Supabase", skillIcon: <SiSupabase /> },
  { skillName: "Firebase", skillIcon: <SiFirebase /> },
  { skillName: "PostgreSQL", skillIcon: <SiPostgresql /> },
  { skillName: "MongoDB", skillIcon: <SiMongodb /> },
  { skillName: "Git", skillIcon: <SiGit /> },
  { skillName: "GitHub", skillIcon: <SiGithub /> },
  { skillName: "Vercel", skillIcon: <SiVercel /> },
  { skillName: "Figma", skillIcon: <SiFigma /> },
  { skillName: "Photoshop", skillIcon: <SiAdobephotoshop /> },
];

export default skills;
