"use client";

import { motion } from "framer-motion";
//animation variants
export const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  export const childVariants = {
    hidden: { opacity: 0, y: -20, },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
export const MotionDiv = motion.div;
export const MotionHeader = motion.header;