import React from "react";
import DateTime from "./DateTime";
import MyLocation from "./MyLocation";
import { LuCalendarDays } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="mt-4 font-manrope border-t-2 border-zinc-200">
      <MyLocation />
      <div className="flex justify-between">
        <div className="flex items-center gap-1">
          <LuCalendarDays />
          <DateTime formatString="MMMM d, yyyy HH:mm:ss" />
        </div>
        <p className="text-xs">&copy;2024 Nilaacodes</p>
      </div>
    </footer>
  );
};

export default Footer;
