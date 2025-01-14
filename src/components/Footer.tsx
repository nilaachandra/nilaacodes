import React from "react";
import DateTime from "./DateTime";
import MyLocation from "./MyLocation";

const Footer = () => {
  return (
    <footer className="mt-4 font-manrope border-t-2 border-zinc-200">
      <MyLocation />
      <div className="flex justify-between">
        <div className="flex items-center gap-1">
          <DateTime formatString="MMMM d, yyyy HH:mm"  />
        </div>
        <p className="text-xs">&copy;2024 nilaacodes</p>
      </div>
    </footer>
  );
};

export default Footer;
