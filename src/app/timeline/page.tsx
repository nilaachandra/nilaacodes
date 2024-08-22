import {
  childVariants,
  containerVariants,
  MotionHeader,
} from "@/components/MotionDiv";
import { timelineItems } from "@/staticdata/timeline";
import React from "react";

const Timeline = () => {
  return (
    <MotionHeader
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full min-h-[60vh]"
    >
      <MotionHeader
        variants={childVariants}
        className="flex items-center justify-between"
      >
        <h2 className="text-2xl font-bold">My Timeline</h2>
      </MotionHeader>
      <div className="mt-3 space-y-4">
        {timelineItems.map((item, index) => (
          <MotionHeader variants={childVariants} key={index} className="flex">
            <div className="flex flex-col items-center mr-4">
              <div className="w-px h-full bg-black dark:bg-white"></div>
              <div className="w-2 h-2 rounded-full bg-black dark:bg-white mt-2"></div>
            </div>
            <div className="flex-1">
              <div className="font-semibold">{item.date}</div>
              <h3 className="font-semibold">{item.title}</h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                {item.description.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
            </div>
          </MotionHeader>
        ))}
      </div>
    </MotionHeader>
  );
};

export default Timeline;
