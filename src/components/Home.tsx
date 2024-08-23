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
import MyLocation from "./MyLocation";
import Experience from "./Experience";

const Homepage = () => {
  return (
    <MotionDiv initial="hidden" animate="visible" variants={containerVariants}>
      <section className="w-full">
        <MotionHeader
          variants={childVariants}
          className="flex justify-between gap-3 items-center w-full"
        >
          <div className="profile justify-center flex items-center">
            <Image
              src="https://pbs.twimg.com/profile_images/1822673085717221377/4NVrn3ky_400x400.jpg"
              height={120}
              width={120}
              className="rounded-full"
              alt=""
            />
          </div>
          <div className="desc md:w-full   lg:w-full col-span-2">
            <div className="flex items-center gap-0.5">
              <h1 className="font-bold text-3xl">
                <span className="text-blue-700">Nilaa</span> Laishram🎃
              </h1>
            </div>
            <ul className="list-inside">
              <li className="tracking-tight">
                <span className="font-bold italic">
                  Next Js Developer, Freelancer & UI Designer
                </span>
              </li>
            </ul>
          </div>
        </MotionHeader>

        <MotionDiv variants={childVariants} className="mt-3">
          <ul className="list-inside space-y-1 tracking-tight">
            <li>
              {" "}
              <MyLocation />{" "}
            </li>
            <li>
              <span className="mr-2">🌍</span>Got a background in{" "}
              <span className="font-bold italic text-blue-700">Geology</span>{" "}
              and{" "}
              <span className="font-bold italic text-blue-700">
                Mathematics
              </span>
              .
            </li>
            <li>
              <span className="mr-2">⚛️</span>Mainly working with{" "}
              <span className="font-bold italic text-blue-700">React</span> and{" "}
              <span className="font-bold italic text-blue-700">Next JS</span>{" "}
              with{" "}
              <span className="font-bold italic text-blue-700">TypeScript</span>
              .
            </li>
            <li>
              <span className="mr-2">🥺</span>Open to opportunities and
              freelancing gigs.
            </li>
            <li>
              <span className="mr-2">⚽</span>Also into{" "}
              <span className="font-bold italic text-blue-700">Football</span>
            </li>
            <li className="italic font-semibold">Hala Madrid y Nada Mas 🤍!</li>
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
          <h2 className="text-lg mb-2 font-bold">Experience 💼</h2>

          <Experience />
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
