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
  SiShadcnui,
  SiPrisma,
} from "react-icons/si";

type Skill = {
  skillName: string;
  skillIcon: ReactNode;
};

const skills: Skill[] = [
  { skillName: "Next.js", skillIcon: <SiNextdotjs size={14} /> },
  { skillName: "React", skillIcon: <SiReact size={14} /> },
  { skillName: "JavaScript", skillIcon: <SiJavascript size={14} /> },
  { skillName: "TypeScript", skillIcon: <SiTypescript size={14} /> },
  { skillName: "Tailwind", skillIcon: <SiTailwindcss size={14} /> },
  { skillName: "Tanstack Query", skillIcon: <SiReactquery size={14} /> },
  { skillName: "Node.js", skillIcon: <SiNodedotjs size={14} /> },
  { skillName: "Express", skillIcon: <SiExpress size={14} /> },
  { skillName: "Python", skillIcon: <SiPython size={14} /> },
  { skillName: "Supabase", skillIcon: <SiSupabase size={14} /> },
  { skillName: "Firebase", skillIcon: <SiFirebase size={14} /> },
  { skillName: "PostgreSQL", skillIcon: <SiPostgresql size={14} /> },
  { skillName: "Prisma", skillIcon: <SiPrisma size={14} /> },
  { skillName: "MongoDB", skillIcon: <SiMongodb size={14} /> },
  { skillName: "Shadcn", skillIcon: <SiShadcnui size={14} /> },
  { skillName: "Git", skillIcon: <SiGit size={14} /> },
  { skillName: "GitHub", skillIcon: <SiGithub size={14} /> },
  { skillName: "Vercel", skillIcon: <SiVercel size={14} /> },
  { skillName: "Figma", skillIcon: <SiFigma size={14} /> },
  { skillName: "Photoshop", skillIcon: <SiAdobephotoshop size={14} /> },
];

export default skills;
