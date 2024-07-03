import Image from "next/image";
import Wigglyline from "./Wigglyline";
import Techstack from "./Techstack";
import Link from "next/link";
import Socials from "./Socials";
import SelectedWorks from "./SelectedWorks";
import { MotionDiv, MotionHeader, childVariants, containerVariants } from "@/components/MotionDiv";



const Homepage = () => {
  return (
    <MotionDiv initial="hidden" animate="visible" variants={containerVariants}>
      <section className="w-full">
        <MotionHeader
          variants={childVariants}
          className="hello grid grid-cols-3  gap-3 items-center"
        >
          <div className="desc w-full col-span-2">
            <h1 className="font-bold lg:text-3xl text-lg">
              Hello, I&apos;m <span className="text-blue-700">Nilaa</span>{" "}
              Laishram 👋
            </h1>
            <p className="lg:text-lg text-base tracking-tight leading-5">
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
        </MotionHeader>

        <MotionDiv variants={childVariants}>
          <p className="lg:text-lg text-base leading-5 tracking-tight">
            Once a{" "}
            <span className="italic font-semibold dark:text-blue-600">
              Geology
            </span>{" "}
            buff, now I dive into{" "}
            <span className="italic font-semibold dark:text-blue-600">
              code
            </span>{" "}
            instead of{" "}
            <span className="italic font-semibold dark:text-blue-600">
              rocks
            </span>
            . I traded fossils for frameworks and never looked back. I&apos;m
            passionate about learning, especially{" "}
            <span className="italic font-semibold dark:text-blue-600">
              Next.js
            </span>
            , and love{" "}
            <span className="italic font-semibold dark:text-blue-600">
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
          <Link href="/about" className="text-blue-700 text-sm underline">
            Read More.
          </Link>
          <Socials />
        </MotionDiv>
        <MotionDiv variants={childVariants}>
          <Wigglyline />
          <Techstack />
          <Wigglyline />
        </MotionDiv>
        <MotionDiv variants={childVariants}>
          <SelectedWorks />
        </MotionDiv>
      </section>
    </MotionDiv>
  );
};

export default Homepage;
