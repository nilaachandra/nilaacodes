"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  linkName: string;
  href: string;
};

const navLinks: { [key: string]: NavLink } = {
  "/": { linkName: "Home", href: "/" },
  "/about": { linkName: "About", href: "/about" },
  "/projects": { linkName: "Projects", href: "/projects" },
  "/writing": { linkName: "Writing", href: "/writing" },
  "/guestbook": { linkName: "Guestbook", href: "/guestbook" },
  "/shelf": { linkName: "Shelf", href: "/shelf" },
};

const Navbar = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname() || "/";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="w-full">
      <div className="flex justify-between items-center">
        {mounted && theme === "dark" && (
          <Image
            src="/nilaacodes-light.png"
            width={48}
            height={48}
            alt="Nilaacodes"
          />
        )}
        {mounted && theme !== "dark" && (
          <Image
            src="/nilaacodes-dark.png"
            width={48}
            height={48}
            alt="Nilaacodes"
          />
        )}

        <div className="flex items-center gap-2">
          <a
            href="https://x.com/nilaacodes"
            target="_blank"
            className="text-blue-600"
          >
            Hire Me🚀
          </a>
          <ThemeToggle />
        </div>
      </div>
      <div className="link-container w-full flex justify-between">
        {Object.entries(navLinks).map(([path, { linkName }]) => (
          <Link key={path} href={path} className={pathname === path ? "underline font-semibold" : "text-zinc-500"}>
            {linkName}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
