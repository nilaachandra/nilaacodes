"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Link } from "next-view-transitions";

const navLinks = [
  { linkName: "about", href: "/about" },
  { linkName: "works", href: "/projects" },
  { linkName: "writings", href: "/writings" },
];

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname() || "/";
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <header className="w-full rounded-md py-2 font-manrope mb-8 mt-4">
        <div className="flex justify-between items-center">
          <Link
            href={"/"}
            className="h-8 w-8 p-0.5 border-2 justify-center bg-blue-700 dark:bg-white flex items-center dark:border-white rounded-md"
          >
            {mounted && (
              <Image
                src="/nilaacodes-light.png"
                width={30}
                height={30}
                alt="Nilaacodes"
                className="dark:invert"
              />
            )}
          </Link>
          <div>
            {navLinks.map(({ linkName, href }, index) => (
              <Link
                key={href}
                href={href}
                data-id={href}
                className={`inline-flex items-center justify-center text-center px-2 ${
                  pathname === href
                    ? "text-zinc-800 dark:text-zinc-50 underline"
                    : "text-zinc-500"
                }`}
              >
                {linkName}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
