import Image from "next/image";
import Wigglyline from "./Wigglyline";
import Techstack from "./Techstack";
import Link from "next/link";
import Socials from "./Socials";
import DateTime from "./DateTime";
import { TiLocationArrowOutline } from "react-icons/ti";
const Homepage = () => {
  return (
    <section className="w-full">
      <div className="hello grid grid-cols-3  gap-3 items-center">
        <div className="desc w-full col-span-2">
          <h1 className="font-bold lg:text-3xl text-lg">
            Hello, I&apos;m <span className="text-blue-700">Nilaa</span> Laishram 👋
          </h1>
          <p className="lg:text-base text-sm tracking-tight leading-5">
            - Full Stack Developer, Freelancer and UI designer🚀 who loves to
            build and ship things.
          </p>
          
        </div>
        <div className="profile justify-center flex items-center">
          <Image
            src="/nilaacodes-pfp.png"
            height={120}
            width={120}
            className="rounded-lg"
            alt=""
          />
        </div>
      </div>

      <div className="mt-3">
        <p className="lg:text-base text-sm leading-5 tracking-tight">
          Once a{" "}
          <span className="italic font-semibold dark:text-zinc-300">
            Geology
          </span>{" "}
          buff, now I dive into{" "}
          <span className="italic font-semibold dark:text-zinc-300">code</span>{" "}
          instead of{" "}
          <span className="italic font-semibold dark:text-zinc-300">rocks</span>
          . I traded fossils for frameworks and never looked back. I&apos;m
          passionate about learning, especially{" "}
          <span className="italic font-semibold dark:text-zinc-300">
            Next.js
          </span>
          , and love{" "}
          <span className="italic font-semibold dark:text-zinc-300">
            building and shipping
          </span>{" "}
          stuffs. I&apos;m Looking for new opportunities, freelancing &
          collaborations. Reach me out on{" "}
          <a
            href="https://x.com/nilaacodes"
            target="_blank"
            className="underline text-blue-700"
          >
            Twitter
          </a>
          . I&apos;m super active there.
        </p>
        <Link href="/about" className="text-blue-700 underline">
          Read More.
        </Link>
        <Socials />
        <Wigglyline />
        <Techstack />
        <Wigglyline />
        <p>Building the rest of the site soon 🥲. Please Stay Tuned!</p>
      </div>
      <div className="mt-4 flex justify-between">
            {" "}
            <a href="https://en.wikipedia.org/wiki/Silchar" className="underline flex items-center gap-1" target="_blank">
            <TiLocationArrowOutline size={22}/>

              <span>Silchar, Assam, India</span>
            </a>{" "}
            <DateTime formatString="MMMM d, yyyy HH:mm:ss" />
          </div>
    </section>
  );
};

export default Homepage;
