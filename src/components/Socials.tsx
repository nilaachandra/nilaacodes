import socialLinks from "@/staticdata/socialLinks";
import React from "react";
import Buildspace from "./Buildspace";

const Socials = () => {
  return (
    <section className="w-full mt-3">
      <h1 className="font-semibold mb-3 text-xl">Let&apos;s have a chat 💬.</h1>
      <div className="flex gap-3 items-center">
        {socialLinks.map((social, index) => (
          <a key={index} href={social.linkHref} target="_blank">
            {social.linkIcon}
          </a>
          
        ))}
        <a
          href="https://sage.buildspace.so/@nila-laishram-qE2IJnO"
          target="_blank"
        >
          <Buildspace />
        </a>
      </div>
      
    </section>  
  );
};

export default Socials;
