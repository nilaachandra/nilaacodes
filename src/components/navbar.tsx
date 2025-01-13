"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Link } from "next-view-transitions";
import Emoji from "./Emoji";

const navLinks = [
  { linkName: "about", href: "/about" },
  { linkName: "works", href: "/projects" },
  { linkName: "writings", href: "/writings" },
];

const Navbar = () => {
  const pathname = usePathname() || "/";

  return (
    <>
      <header className="w-full rounded-md py-2 font-manrope mb-8 mt-4">
        <div className="flex justify-between items-center">
          <Link
            href={"/"}
            className="h-8 w-8 p-0.5 border-2 justify-center bg-blue-700 flex items-cente rounded-md"
          >
            <Image
              src="/nilaacodes-light.png"
              width={30}
              height={30}
              alt="Nilaacodes"
            />
          </Link>
          <div className="flex">
            {navLinks.map(({ linkName, href }, index) => (
              <Link
                key={href}
                href={href}
                data-id={href}
                className={`inline-flex items-center justify-center text-center px-2 ${
                  pathname === href
                    ? "text-zinc-800 underline"
                    : "text-zinc-500"
                }`}
              >
                {linkName}
              </Link>
            ))}
            <Emoji />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
