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
        <MotionHeader variants={childVariants} className="">
          <h1 className="text-3xl font-instrumentSerif italic text-blue-800 font-bold">
            about me
          </h1>
          <p className="tracking-normal leading-5 mt-3 text-sm">
            hey there! i&apos;m Nila Chandra Laishram, but you can just call me
            Nilaa like everyone else does. i&apos;m a full stack developer,
            freelancer, and ui designer🚀 with a love for building and shipping
            cool stuff. fun fact: i used to be a Geology student until
            programming caught my eye a year ago. So here i am, knee-deep in web
            development, and loving every minute of it.
          </p>
        </MotionHeader>
        <MotionHeader variants={childVariants} className="">
          <p className="tracking-normal leading-5 mt-3 text-sm">
            i mainly work with React and Next.js for both frontend and backend,
            using TypeScript. Besides that, i love learning new things every
            day—gotta keep that curiosity alive! i&apos;m also on the lookout
            for opportunities in this field, so if you&apos;ve got something for
            me, shoot me a DM on Twitter. i&apos;m super active there.
          </p>
        </MotionHeader>
        <MotionHeader variants={childVariants} className="">
          <p className="tracking-normal leading-5 mt-3 text-sm">
            when i&apos;m not coding, you&apos;ll find me obsessing over football—Real
            Madrid is my favorite team, and i never miss their games! i&apos;m also a
            huge fan of the Marvel Cinematic Universe, with an almost
            encyclopedic memory of all their movies. Eminem&apos;s music keeps me
            pumped, and i&apos;m a proud Potterhead who can rewatch the Harry Potter
            series endlessly. these little obsessions keep life exciting outside
            of coding!
          </p>
        </MotionHeader>
        <MotionHeader variants={childVariants} className="">
          <video className="w-full mt-3 rounded-lg" muted autoPlay loop>
            <source src="/nilaacodesvid.mp4" type="video/mp4" />
          </video>
        </MotionHeader>
        <p className="tracking-normal leading-5 mt-3"></p>
      </section>
    </MotionDiv>
  );
};

export default About;
