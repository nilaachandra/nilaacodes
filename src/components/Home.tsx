import Image from "next/image";
import Wigglyline from "./Wigglyline";
import Techstack from "./Techstack";
import Socials from "./Socials";
import SelectedWorks from "./SelectedWorks";
import {
  MotionDiv,
  MotionHeader,
  childVariants,
  containerVariants,
} from "@/components/MotionDiv";
import MyWritings from "./MyWritings";

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
              Hey, I&apos;m <span className="text-blue-700">Nilaa</span>{" "}
              Laishram 👋
            </h1>
            <ul className="list-inside">
              <li className="tracking-tight">
                <span className="mr-3">🚀</span>
                <span className="font-bold">Full Stack Developer</span> and{" "}
                <span className="font-bold">Freelancer</span> who loves to build
                and ship stuffs.
              </li>
            </ul>
          </div>
          <div className="profile justify-center flex items-center">
            <Image
              src="/nilaacodes-pfp2.jpg"
              height={120}
              width={120}
              className="rounded-lg"
              alt=""
            />
          </div>
        </MotionHeader>
        <MotionDiv variants={childVariants} className="mt-3">
          <ul className="list-inside space-y-1 tracking-tight">
            <li>
              <span className="mr-2">🌍</span>I&apos;ve got a background in{" "}
              <span className="font-bold text-blue-700">Geology</span> and{" "}
              <span className="font-bold text-blue-700">Mathematics</span>.
            </li>
            <li>
              <span className="mr-2">⚛️</span>Mainly working with{" "}
              <span className="font-bold text-blue-700">React</span> and{" "}
              <span className="font-bold text-blue-700">Next JS</span> with{" "}
              <span className="font-bold text-blue-700">TypeScript</span>
            </li>
            <li>
              <span className="mr-2">🥺</span>Open to opportunities and
              freelancing gigs.
            </li>
            <li>
              <span className="mr-2">⚽♟️</span>Also into{" "}
              <span className="font-bold text-blue-700">Football</span>, and{" "}
              <span className="font-bold text-blue-700">Chess</span>
            </li>
          </ul>
          <Wigglyline />

        </MotionDiv>
        <MotionDiv variants={childVariants} className="mt-3">
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
        <Wigglyline />
        <MotionDiv variants={childVariants}>
          <MyWritings />
        </MotionDiv>
        <Wigglyline />
        <h1 className="leading-5">
          That&apos;s all for now, folks. The site is still under construction,
          because perfection takes time. For any burning questions, brilliant
          feedback, or life-changing suggestions, feel free to slide into my DMs
          on{" "}
          <a
            href="https://x.com/nilaacodes"
            target="_blank"
            className="underline text-blue-700"
          >
            Twitter
          </a>{" "}
          or drop me an{" "}
          <a
            href="https://nilalaishram@gmail.com"
            target="_blank"
            className="underline text-blue-700"
          >
            email
          </a>
          . Thanks for stopping by 🤠!
        </h1>
      </section>
      <Wigglyline />
    </MotionDiv>
  );
};

export default Homepage;
