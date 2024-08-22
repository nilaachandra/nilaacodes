"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Link } from "next-view-transitions";
import { LuHome } from "react-icons/lu";

type NavLink = {
  linkName: string;
  href: string;
};

const navLinks: { [key: string]: NavLink } = {
  "/": { linkName: "Home", href: "/" },
  "/about": { linkName: "About", href: "/about" },
  "/projects": { linkName: "Projects", href: "/projects" },
  "/writings": { linkName: "Writings", href: "/writings" },
  "/timeline": { linkName: "Timeline", href: "/timeline" },
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
    <>
      <header className="w-full rounded-md py-2">
        <div className="flex justify-between items-center ">
          <div className="h-10 w-10 p-0.5 border-2 justify-center bg-black dark:bg-white flex items-center dark:border-white border-black rounded-md">
            {mounted &&
              (theme === "dark" ? (
                <Image
                  src="/nilaacodes-dark.png"
                  width={40}
                  height={40}
                  alt="Nilaacodes"
                />
              ) : (
                <Image
                  src="/nilaacodes-light.png"
                  width={48}
                  height={48}
                  alt="Nilaacodes"
                />
              ))}
          </div>

          <div className="flex items-center justify-between gap-2">
            <a
              href="https://x.com/nilaacodes"
              target="_blank"
              className="text-blue-600 underline"
            >
              Hire Me
            </a>
            🚀
            <ThemeToggle />
          </div>
        </div>
      </header>
      <div className="link-container sticky top-0 w-full flex items-end gap-x-4 gap-y-2 flex-wrap bg-white dark:bg-black py-4">
        {Object.entries(navLinks).map(([path, { linkName }]) => (
          <Link
            key={path}
            href={path}
            className={
              pathname === path ? "underline font-semibold" : "text-zinc-500"
            }
          >
            {linkName}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
