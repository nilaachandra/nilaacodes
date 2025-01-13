import socialLinks from "@/staticdata/socialLinks";
import React from "react";

const Socials = () => {
  return (
    <section className="w-full mt-3">
      <h1 className="font-semibold mb-3 text-3xl text-blue-800 font-instrumentSerif">
        let&apos;s have a chat
      </h1>
      <div className="flex gap-3 items-center">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.linkHref}
            target="_blank"
            className="hover:text-blue-800 transition-all duration-200"
          >
            {social.linkIcon}
          </a>
        ))}
        <a
          href="https://sage.buildspace.so/@nila-laishram-qE2IJnO"
          target="_blank"
        ></a>
      </div>
    </section>
  );
};

export default Socials;
