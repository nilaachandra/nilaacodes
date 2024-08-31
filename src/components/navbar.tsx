"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Link } from "next-view-transitions";
import ThemeToggle from "./ThemeToggle";
import AnimatedBackground from "./core/animate-background";

const navLinks = [
  { linkName: "Home", href: "/" },
  { linkName: "About", href: "/about" },
  { linkName: "Works", href: "/projects" },
  { linkName: "Writings", href: "/writings" },
  { linkName: "Timeline", href: "/timeline" },
  { linkName: "Guestbook", href: "/guestbook" },
  { linkName: "Shelf", href: "/shelf" },
];

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
        <div className="flex justify-between items-center">
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
      <div className="link-container z-50 sticky top-0 w-full flex items-end gap-x-2 gap-y-2 flex-wrap bg-white dark:bg-black py-4">
        <AnimatedBackground
          defaultValue={pathname}
          className="rounded-md bg-zinc-300 dark:bg-zinc-700"
          transition={{
            ease: "easeInOut",
            duration: 0.4,
          }}
        >
          {navLinks.map(({ linkName, href }, index) => (
            <Link
              key={href}
              href={href}
              data-id={href}
              className={`inline-flex items-center justify-center text-center px-2 ${pathname === href ? "text-zinc-800 dark:text-zinc-50" : "text-zinc-500"
                }`}
            >
              {linkName}
            </Link>
          ))}
        </AnimatedBackground>
      </div>
    </>
  );
};

export default Navbar;
