import React, { ReactNode } from "react";
import { LuGithub, LuInstagram, LuLinkedin, LuTwitter } from "react-icons/lu";
type SocialLink = {
    linkName: string,
    linkHref: string,
    linkIcon: ReactNode
}

const socialLinks: SocialLink[] = [
  {
    linkName: "Twitter",
    linkHref: "https://x.com/nilaacodes",
    linkIcon: <LuTwitter size={24} />,
  },
  {
    linkName: "GitHub",
    linkHref: "https://github.com/nilaachandra",
    linkIcon: <LuGithub size={24} />,
  },
  {
    linkName: "Instagram",
    linkHref: "https://www.instagram.com/niillaaa.a/",
    linkIcon: <LuInstagram size={24} />,
  },
  {
    linkName: "LinkedIn",
    linkHref: "https://www.linkedin.com/in/nila-chandra-laishram-15a589256/",
    linkIcon: <LuLinkedin size={24} />,
  },
];

export default socialLinks;
