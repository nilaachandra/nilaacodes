import React, { ReactNode } from "react";
import { LuCoffee, LuGithub, LuInstagram, LuLinkedin, LuTwitter } from "react-icons/lu";
import { SiBuymeacoffee } from "react-icons/si";
type SocialLink = {
    linkName: string,
    linkHref: string,
    linkIcon: ReactNode
}

const socialLinks: SocialLink[] = [
  {
    linkName: "Twitter",
    linkHref: "https://x.com/nilaacodes",
    linkIcon: <LuTwitter size={28} />,
  },
  {
    linkName: "GitHub",
    linkHref: "https://github.com/nilaachandra",
    linkIcon: <LuGithub size={28} />,
  },
  {
    linkName: "Instagram",
    linkHref: "https://www.instagram.com/niillaaa.a/",
    linkIcon: <LuInstagram size={28} />,
  },
  {
    linkName: "LinkedIn",
    linkHref: "https://www.linkedin.com/in/nila-chandra-laishram-15a589256/",
    linkIcon: <LuLinkedin size={28} />,
  },
  {
    linkName: "BuyMeACoffee",
    linkHref: "https://www.buymeacoffee.com/nilaacodes",
    linkIcon: <SiBuymeacoffee size={28} />,
  },
];

export default socialLinks;
