import React from "react";
import LocationDistance from "./LocationDistance";

const MyLocation = () => {
  return (
    <div className="w-full items-center gap-2 text-xs mt-3">
      <a
        href="https://en.wikipedia.org/wiki/Silchar"
        className="text-blue-800 flex items-center gap-1"
        target="_blank"
      >
        <span>Silchar, Assam, India</span>
      </a>
      <LocationDistance />
    </div>
  );
};

export default MyLocation;
