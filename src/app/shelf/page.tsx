"use client";

import { useRouter } from "next/navigation";
import { TransitionPanel } from "@/components/core/transition-panels";
import { useState } from "react";
import Books from "./shelpComponents/books";
import Playlists from "./shelpComponents/playlists";
import Resources from "./shelpComponents/resources";
import Journal from "./shelpComponents/journal";
import Photos from "./shelpComponents/photos";
import MyGear from "./shelpComponents/myGear";

const ITEMS = [
  { icon: "📚", label: "Books", component: <Books /> },
  { icon: "🎶", label: "Playlists", component: <Playlists /> },
  { icon: "🖇️", label: "Resources", component: <Resources /> },
  { icon: "✍🏻", label: "Journals", component: <Journal /> },
  { icon: "📷", label: "Photos", component: <Photos /> },
  { icon: "🎒", label: "My Gear", component: <MyGear /> },
];

export default function Shelf() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="w-full">
      <h1 className="font-bold text-3xl mb-4">My Shelf</h1>
      <p className="leading-5 mb-4">
        This is my little corner of the internet where I keep all my
        stuff—journals, books, songs I like, and photos I&apos;ve taken.
        It&apos;s like a snapshot of my life, all in one place. Feel free to
        take a look around. You might find something interesting.
      </p>
      <div className=" flex flex-wrap gap-2">
        {ITEMS.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`rounded-md px-3 py-1 text-sm font-medium ${
              activeIndex === index
                ? "bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
                : "bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400"
            }`}
          >
            <span className="text-xl lg:text-base">{item.icon}</span>{" "}
            <span className="hidden lg:inline-block">{item.label}</span>
          </button>
        ))}
      </div>
      <div className="overflow-hidden">
        <TransitionPanel
          activeIndex={activeIndex}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          variants={{
            enter: { opacity: 0, y: -50, filter: "blur(4px)" },
            center: { opacity: 1, y: 0, filter: "blur(0px)" },
            exit: { opacity: 0, y: 50, filter: "blur(4px)" },
          }}
        >
          {ITEMS.map((item, index) => (
            <div key={index} className="py-2">
              <h1 className="mb-2 font-semibold text-2xl text-zinc-800 dark:text-zinc-100">
                {item.label}
              </h1>
              {item.component}
            </div>
          ))}
        </TransitionPanel>
      </div>
    </div>
  );
}
