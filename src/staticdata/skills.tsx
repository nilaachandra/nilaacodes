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
  { skillName: "Next.js", skillIcon: <SiNextdotjs size={18}/> },
  { skillName: "React", skillIcon: <SiReact size={18}/> },
  { skillName: "JavaScript", skillIcon: <SiJavascript size={18}/> },
  { skillName: "TypeScript", skillIcon: <SiTypescript size={18}/> },
  { skillName: "Tailwind CSS", skillIcon: <SiTailwindcss size={18}/> },
  { skillName: "React Query", skillIcon: <SiReactquery size={18}/> },
  { skillName: "Node.js", skillIcon: <SiNodedotjs size={18}/> },
  { skillName: "Express", skillIcon: <SiExpress size={18}/> },
  { skillName: "Python", skillIcon: <SiPython size={18}/> },
  { skillName: "Supabase", skillIcon: <SiSupabase size={18}/> },
  { skillName: "Firebase", skillIcon: <SiFirebase size={18}/> },
  { skillName: "PostgreSQL", skillIcon: <SiPostgresql size={18}/> },
  { skillName: "MongoDB", skillIcon: <SiMongodb size={18}/> },
  { skillName: "Shadcn", skillIcon: <SiShadcnui size={18}/> },

  { skillName: "Git", skillIcon: <SiGit size={18}/> },
  { skillName: "GitHub", skillIcon: <SiGithub size={18}/> },
  { skillName: "Vercel", skillIcon: <SiVercel size={18}/> },
  { skillName: "Figma", skillIcon: <SiFigma size={18}/> },
  { skillName: "Photoshop", skillIcon: <SiAdobephotoshop size={18}/> },
];

export default skills;
