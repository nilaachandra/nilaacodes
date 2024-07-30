"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type Status = 'building' | 'running' | 'discontinued';

interface StatusProps {
  status: Status;
}

const Status: React.FC<StatusProps> = ({ status }) => {
  const statusClasses: { [key in Status]: string } = {
    building: 'bg-blue-500 shadow-blue-200',
    running: 'bg-green-500 shadow-green-200',
    discontinued: 'bg-red-500 shadow-red-200',
  };

  const glowAnimation = {
    building: {
      boxShadow: [
        '0 0 0px rgba(0, 0, 255, 0.5)',
        '0 0 15px rgba(0, 0, 255, 0.5)',
        '0 0 30px rgba(0, 0, 255, 0.5)',
        '0 0 15px rgba(0, 0, 255, 0.5)',
        '0 0 0px rgba(0, 0, 255, 0.5)',
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: 'loop',
      },
    },
    running: {
      boxShadow: [
        '0 0 0px rgba(0, 255, 0, 0.5)',
        '0 0 15px rgba(0, 255, 0, 0.5)',
        '0 0 30px rgba(0, 255, 0, 0.5)',
        '0 0 15px rgba(0, 255, 0, 0.5)',
        '0 0 0px rgba(0, 255, 0, 0.5)',
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: 'loop',
      },
    },
    discontinued: {
      boxShadow: [
        '0 0 0px rgba(255, 0, 0, 0.5)',
        '0 0 15px rgba(255, 0, 0, 0.5)',
        '0 0 30px rgba(255, 0, 0, 0.5)',
        '0 0 15px rgba(255, 0, 0, 0.5)',
        '0 0 0px rgba(255, 0, 0, 0.5)',
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: 'loop',
      },
    },
  };

  const statusText: { [key in Status]: string } = {
    building: 'Building',
    running: 'Running',
    discontinued: 'Discontinued',
  };

  return (
    <div className="flex items-center gap-1 justify-center bg-zinc-300 dark:bg-zinc-700 px-1 rounded-sm">
      <motion.div
        className={cn(
          'w-2 h-2 rounded-full',
          'shadow-lg shadow-opacity-50',
          statusClasses[status]
        )}
        animate={{ boxShadow: glowAnimation[status].boxShadow }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      ></motion.div>
      <span className={cn(
        'text-xs font-semibold',        
      )}>
        {statusText[status]}
      </span>
    </div>
  );
};

export default Status;
