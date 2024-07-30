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
} from "react-icons/si";

type Skill = {
  skillName: string;
  skillIcon: ReactNode;
};

const skills: Skill[] = [
  { skillName: "Next.js", skillIcon: <SiNextdotjs size={16}/> },
  { skillName: "React", skillIcon: <SiReact size={16}/> },
  { skillName: "JavaScript", skillIcon: <SiJavascript size={16}/> },
  { skillName: "TypeScript", skillIcon: <SiTypescript size={16}/> },
  { skillName: "Tailwind", skillIcon: <SiTailwindcss size={16}/> },
  { skillName: "Tanstack Query", skillIcon: <SiReactquery size={16}/> },
  { skillName: "Node.js", skillIcon: <SiNodedotjs size={16}/> },
  { skillName: "Express", skillIcon: <SiExpress size={16}/> },
  { skillName: "Python", skillIcon: <SiPython size={16}/> },
  { skillName: "Supabase", skillIcon: <SiSupabase size={16}/> },
  { skillName: "Firebase", skillIcon: <SiFirebase size={16}/> },
  { skillName: "PostgreSQL", skillIcon: <SiPostgresql size={16}/> },
  { skillName: "MongoDB", skillIcon: <SiMongodb size={16}/> },
  { skillName: "Shadcn", skillIcon: <SiShadcnui size={16}/> },

  { skillName: "Git", skillIcon: <SiGit size={16}/> },
  { skillName: "GitHub", skillIcon: <SiGithub size={16}/> },
  { skillName: "Vercel", skillIcon: <SiVercel size={16}/> },
  { skillName: "Figma", skillIcon: <SiFigma size={16}/> },
  { skillName: "Photoshop", skillIcon: <SiAdobephotoshop size={16}/> },
];

export default skills;
