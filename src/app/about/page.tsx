import React from "react";
import {
  MotionDiv,
  MotionHeader,
  childVariants,
  containerVariants,
} from "@/components/MotionDiv";

const About = () => {
  return (
    <MotionDiv initial="hidden" animate="visible" variants={containerVariants}>
      <section className="w-full">
        <MotionHeader
          variants={childVariants}
          className=""
        >
          <h1 className="text-2xl font-bold">About Me</h1>
          <p className="tracking-normal leading-5 mt-3">
            Hey there! I&apos;m Nila Chandra Laishram, but you can just call me
            Nilaa like everyone else does. I&apos;m a Full Stack Developer,
            Freelancer, and UI Designer🚀 with a love for building and shipping
            cool stuff. Fun fact: I used to be a Geology student until
            programming caught my eye a year ago. So here I am, knee-deep in web
            development, and loving every minute of it.
          </p>
        </MotionHeader>
        <MotionHeader
          variants={childVariants}
          className=""
        >
        <p className="tracking-normal leading-5 mt-3">
          I mainly work with React and Next.js for both frontend and backend,
          using TypeScript. Besides that, I love learning new things every
          day—gotta keep that curiosity alive! I&apos;m also on the lookout for
          opportunities in this field, so if you&apos;ve got something for me,
          shoot me a DM on Twitter. I&apos;m super active there.
        </p>
        </MotionHeader>
        <MotionHeader
          variants={childVariants}
          className=""
        >
        <video className="w-full mt-3 rounded-lg" muted autoPlay loop>
          <source src="/nilaacodesvid.mp4" type="video/mp4" />
        </video>
        </MotionHeader>
        <p className="tracking-normal leading-5 mt-3">

        </p>
      </section>
    </MotionDiv>
  );
};

export default About;
