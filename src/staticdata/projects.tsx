import Status from "@/components/Status";
import { ReactNode } from "react";

interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  linkURL: string;
  githubURL: string;
  status: "building" | "running" | "discontinued"; // Use string literal types
  skills: string[];
}

const projects: Project[] = [
  {
    id: 2,
    image: "/spotlistify.png",
    title: "Spotlistify",
    description:
      "A directory of Spotify playlists",
    githubURL: "https://github.com/nilaachandra/spotlistify",
    linkURL: "https://spotlistify.vercel.app",
    skills: ["Next JS", "TypeScript", "Tailwind", "ShadCn", "Tanstack Query", "PostgreSQL", "Prisma", "NextAuth"],
    status: "running",
  },
  {
    id: 2,
    image: "/silly.png",
    title: "Silly Questions",
    description:
      "Generate 100% engagement guaranteed questions to get more engagements. Click on generate, copy, tweet and see your Twitter engagements go brrrr 🚀",
    githubURL: "https://github.com/nilaachandra/silly-questions",
    linkURL: "https://sillyquestions.vercel.app",
    skills: ["Next JS", "TypeScript", "Tailwind", "Mistral AI", "ShadCn"],
    status: "running",
  },
  {
    id: 3,
    image: "/unicorn.png",
    title: "27Startups",
    description:
      "Inspired by Marc Louvion's 50 Hacks platform, 27 Startups is a platform for your startup or apps ideas. Here you can share, steal and comment on other people's ideas without needing to have an account",
    githubURL: "https://github.com/nilaachandra/27-Startups",
    linkURL: "https://27startups.vercel.app/",
    skills: [
      "React Js",
      "JavaScript",
      "Tailwind",
      "Supabase",
      "Tanstack Query",
    ],
    status: "running",
  },
  {
    id: 4,
    image: "/picmorph-logo.webp",
    title: "Picmorph",
    description:
      "Picmorph is a minimal image compressor and convertor tool that converts images to jpg, png or webp format on the browser. No servers involved!",
    githubURL: "https://github.com/nilaachandra/picmorph",
    linkURL: "https://picmorph.nilaacodes.me",
    skills: [
      "Next Js",
      "TypeScript",
      "Tailwind",
      "ShadCn",
    ],
    status: "running",
  },
  {
    id: 4,
    image: "https://nextjsmodernlp.vercel.app/_next/static/media/Logo.d5a36fa0.svg",
    title: "Modern Landing Page",
    description:
      "A modern sleek landing page I developed with the design provided by Jan Marshall in one of his videos",
    githubURL: "https://github.com/nilaachandra/next-js-modern-landing-page",
    linkURL: "https://nextjsmodernlp.vercel.app/",
    skills: [
      "Next Js",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
      "ShadCn",
      "Animata UI",
    ],
    status: "running",
  },
  {
    id: 4,
    image:
      "https://github.com/nilaachandra/twentysevendays/blob/master/public/27dayslogo.png?raw=true",
    title: "27days.life",
    description:
      "27 Days is a generative AI powered gamified platform where you can start your journey of getting rid from an addiction you have. Discontinued due to lack of free api keys.",
    githubURL: "https://github.com/nilaachandra/twentysevendays",
    linkURL: "https://27days.vercel.app/",
    skills: [
      "Next JS",
      "TypeScript",
      "Tailwind",
      "Supabase",
      "Mistral AI",
      "Tanstack Query",
      "ShadCn",
    ],
    status: "discontinued",
  },
  {
    id: 1,
    image: "/animepfp.jpg",
    title: "Minimalio",
    description:
      "A portfolio template that is beginner friendly, minimal and responsive, made using only html and css, just like those of the cracked devs.",
    githubURL: "https://github.com/nilaachandra/minimalio",
    linkURL: "https://nilaachandra.github.io/minimalio",
    skills: ["HTML", "CSS"],
    status: "running",
  },
  {
    id: 5,
    image: "/rocket.png",
    title: "Another Boilerplate",
    description: "A Next Js boilerplate starter with many features",
    githubURL: "https://github.com/nilaachandra/another-boilerplate",
    linkURL: "",
    skills: [
      "Next JS",
      "TypeScript",
      "Tailwind",
      "Prisma",
      "PostgresSQL",
      "ShadCn",
      "Next Auth",
    ],
    status: "building",
  },
  {
    id: 6,
    image:
      "https://raw.githubusercontent.com/nilaachandra/Brainwave-Landing-Page/9e307e6bc1e0bc01caebb17fa629bdc138554402/src/assets/brainwave-symbol.svg",
    title: "Brainwave",
    description:
      "Modern UI/UX website developed using React.js and Tailwind CSS exemplifies modern UI/UX principles.",
    githubURL: "https://github.com/nilaachandra/Brainwave-Landing-Page",
    linkURL: "https://brainwavelandingclone.vercel.app/",
    skills: ["React Js", "JavaScript", "Tailwind", "Vite"],
    status: "running",
  },
  {
    id: 7,
    image: "https://logomoji.vercel.app/assets/LogoMojii-DWCKwUEl.png",
    title: "Logomoji",
    description:
      "A simple, minimal, easy to use and free Emoji Logo maker for your next website. Pick an emoji, select a background color, adjust it, boom now you have a logo for your next website.",
    githubURL: "https://github.com/nilaachandra/Logomoji",
    linkURL: "https://logomoji.vercel.app/",
    skills: ["React Js", "JavaScript", "Tailwind", "Vite"],
    status: "running",
  },
  {
    id: 8,
    image:
      "https://github.com/nilaachandra/Colour_Picker/blob/main/src/assets/Cbnlogo.png?raw=true",
    title: "ColorsByNilaa",
    description:
      "The Superfast, Easy to Use, Lightweight and Minimal Color Picker. Create the color you like, pick it and use it on your CSS",
    githubURL: "https://github.com/nilaachandra/Colour_Picker",
    linkURL: "https://colorsbynilaa.vercel.app/",
    skills: ["React Js", "JavaScript", "Tailwind", "Vite"],
    status: "running",
  },
  {
    id: 9,
    image:
      "https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/605c62f4c78c4ba46a1268be_avatar-1-p-2000.jpeg",
    title: "Niccollo Miranda",
    description: "A portfolio clone of a famous designer Niccollo Miranda",
    githubURL:
      "https://github.com/nilaachandra/Niccolo-MIranda-Portfolio-Clone",
    linkURL: "https://mirandaportfolioclone.vercel.app/",
    skills: ["HTML5", "CSS3", "TaiwindCSS", "JavaScript"],
    status: "running",
  },
  {
    id: 10,
    image: "/coffee.png",
    title: "Coffeehubb",
    description: "My first major web dev project",
    githubURL: "https://github.com/nilaachandra/CoffeeHubb",
    linkURL: "https://coffeehubb.vercel.app/",
    skills: ["HTML5", "CSS3", "JavaScript", "GSAP"],
    status: "running",
  },
];

export default projects;
