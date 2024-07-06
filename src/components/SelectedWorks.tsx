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
const SelectedWorks = () => {
  return (
    <div>
      <h1 className="font-bold text-lg mb-3">Selected Works 👨🏻‍💻</h1>
      <div className="list flex flex-col gap-3">
        <div className="project border dark:border-white border-black p-3 rounded-lg">
          <div className="title flex justify-between items-center">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold">27days.life</h1>
            </div>
            <div className="div flex items-center gap-3">
              <a
                href="https://27days.vercel.app"
                target="_blank"
                className="cursor-pointer transition-all duration-200 
             hover:dark:bg-white hover:dark:text-black hover:bg-black
              hover:text-white border border-black dark:border-white px-2 text-sm rounded-md p-0.5"
              >
                Link
              </a>
              <a
                href="https://github.com/nilaachandra/twentysevendays"
                target="_blank"
                className="cursor-pointer transition-all duration-200 
             hover:dark:bg-white hover:dark:text-black hover:bg-black
              hover:text-white border border-black dark:border-white px-2 text-sm rounded-md p-0.5"
              >
                <LuGithub size={20} />
              </a>
            </div>
          </div>
          <p className="leading-5">
            27 Days is a generative AI powered gamified platform where you can
            start your journey of getting rid from an addiction you have.
          </p>
          <p className="text-sm">
            Status: <span className="font-semibold">Building</span>
          </p>

          <div className="skills flex gap-2 flex-wrap mt-2">
            <div
              className="cursor-pointer transition-all duration-200 
             hover:dark:bg-white hover:dark:text-black hover:bg-black
              hover:text-white flex items-center justify-center gap-1 border border-black dark:border-white px-2 rounded-md lg:text-base text-sm"
            >
              <SiNextdotjs size={18} />
              <p className="tracking-tight leading-normal">Next JS</p>
            </div>

            <div
              className="cursor-pointer transition-all duration-200 
             hover:dark:bg-white hover:dark:text-black hover:bg-black
              hover:text-white flex items-center justify-center gap-1 border border-black dark:border-white px-2 rounded-md lg:text-base text-sm"
            >
              <SiTypescript size={18} />
              <p className="tracking-tight leading-normal">TypeScript</p>
            </div>

            <div
              className="cursor-pointer transition-all duration-200 
             hover:dark:bg-white hover:dark:text-black hover:bg-black
              hover:text-white flex items-center justify-center gap-1 border border-black dark:border-white px-2 rounded-md lg:text-base text-sm"
            >
              <SiReactquery size={18} />
              <p className="tracking-tight leading-normal">React Query</p>
            </div>

            <div
              className="cursor-pointer transition-all duration-200 
             hover:dark:bg-white hover:dark:text-black hover:bg-black
              hover:text-white flex items-center justify-center gap-1 border border-black dark:border-white px-2 rounded-md lg:text-base text-sm"
            >
              <SiTailwindcss size={18} />
              <p className="tracking-tight leading-normal">Tailwind CSS</p>
            </div>

            <div
              className="cursor-pointer transition-all duration-200 
             hover:dark:bg-white hover:dark:text-black hover:bg-black
              hover:text-white flex items-center justify-center gap-1 border border-black dark:border-white px-2 rounded-md lg:text-base text-sm"
            >
              <SiShadcnui size={18} />
              <p className="tracking-tight leading-normal">ShadCn</p>
            </div>
            <div
              className="cursor-pointer transition-all duration-200 
             hover:dark:bg-white hover:dark:text-black hover:bg-black
              hover:text-white flex items-center justify-center gap-1 border border-black dark:border-white px-2 rounded-md lg:text-base text-sm"
            >
              <SiMeta size={18} />
              <p className="tracking-tight leading-normal">Llama 3</p>
            </div>
            <div
              className="cursor-pointer transition-all duration-200 
             hover:dark:bg-white hover:dark:text-black hover:bg-black
              hover:text-white flex items-center justify-center gap-1 border border-black dark:border-white px-2 rounded-md lg:text-base text-sm"
            >
              <SiSupabase size={18} />
              <p className="tracking-tight leading-normal">Supabase</p>
            </div>
          </div>
        </div>

        <div className="project border dark:border-white border-black p-3 rounded-lg">
          <div className="title flex justify-between items-center">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold">27Startups</h1> 
            </div>
            <div className="div flex items-center gap-3">
              <a
                href="https://27startups.vercel.app"
                target="_blank"
                className="cursor-pointer transition-all duration-200 
             hover:dark:bg-white hover:dark:text-black hover:bg-black
              hover:text-white border border-black dark:border-white px-2 text-sm rounded-md p-0.5"
              >
                Link
              </a>
              <a
                href="https://github.com/nilaachandra/27-Startups"
                target="_blank"
                className="cursor-pointer transition-all duration-200 
             hover:dark:bg-white hover:dark:text-black hover:bg-black
              hover:text-white border border-black dark:border-white px-2 text-sm rounded-md p-0.5"
              >
                <LuGithub size={20} />
              </a>
            </div>
          </div>
          <p className="leading-5">
            Inspired by Marc Louvion&apos;s 50 Hacks platform, 27 Startups is a
            platform for your startup or apps ideas. Here you can share, steal
            and comment on other people&apos;s ideas without needing to have an
            account
          </p>
          <p className="text-sm">
            Status: <span className="font-semibold">Running</span>
          </p>

          <div className="skills flex gap-2 flex-wrap mt-2">
            <div
              className="cursor-pointer transition-all duration-200 
             hover:dark:bg-white hover:dark:text-black hover:bg-black
              hover:text-white flex items-center justify-center gap-1 border border-black dark:border-white px-2 rounded-md lg:text-base text-sm"
            >
              <SiReact size={18} />
              <p className="tracking-tight leading-normal">React</p>
            </div>

            <div
              className="cursor-pointer transition-all duration-200 
             hover:dark:bg-white hover:dark:text-black hover:bg-black
              hover:text-white flex items-center justify-center gap-1 border border-black dark:border-white px-2 rounded-md lg:text-base text-sm"
            >
              <SiJavascript size={18} />
              <p className="tracking-tight leading-normal">JavaScript</p>
            </div>

            <div
              className="cursor-pointer transition-all duration-200 
             hover:dark:bg-white hover:dark:text-black hover:bg-black
              hover:text-white flex items-center justify-center gap-1 border border-black dark:border-white px-2 rounded-md lg:text-base text-sm"
            >
              <SiReactquery size={18} />
              <p className="tracking-tight leading-normal">React Query</p>
            </div>

            <div
              className="cursor-pointer transition-all duration-200 
             hover:dark:bg-white hover:dark:text-black hover:bg-black
              hover:text-white flex items-center justify-center gap-1 border border-black dark:border-white px-2 rounded-md lg:text-base text-sm"
            >
              <SiTailwindcss size={18} />
              <p className="tracking-tight leading-normal">Tailwind CSS</p>
            </div>
            <div
              className="cursor-pointer transition-all duration-200 
             hover:dark:bg-white hover:dark:text-black hover:bg-black
              hover:text-white flex items-center justify-center gap-1 border border-black dark:border-white px-2 rounded-md lg:text-base text-sm"
            >
              <SiSupabase size={18} />
              <p className="tracking-tight leading-normal">Supabase</p>
            </div>
          </div>
        </div>
      </div>
      <p className="leading-5 mt-3">
        These are some of my works, others aren&apos;t worthy of being included
        here, as it still requires some improvements. I&apos;ll update the rest
        later, meanwhile you can still check my works on my{" "}
        <a
          href="https://github.com/nilaachandra?tab=repositories"
          target="_blank"
          className="text-blue-700 underline"
        >
          GitHub
        </a>
        .
      </p>
    </div>
  );
};

export default SelectedWorks;
