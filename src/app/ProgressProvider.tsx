'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { ReactNode } from 'react';

const ProgressProvider = ({ children } : {children:ReactNode}) => {
  return (
    <>
      {children}
      <ProgressBar
        height="3px"
        color="blue"
        
      />
    </>
  );
};

export default ProgressProvider;