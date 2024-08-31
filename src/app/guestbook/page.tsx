import SignButton from '@/app/guestbook/Sign-button';
import React from 'react'
import { SignatureCard } from './SignatureCard';
import { childVariants, containerVariants, MotionDiv, MotionHeader } from '@/components/MotionDiv';
const Guestbook = () => {
  return (
    <MotionHeader
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full min-h-[60vh]"
    >
      <section className='w-full'>
        <MotionDiv variants={childVariants} className="">
          <h1 className='text-2xl font-bold mb-3'>My Guestbook</h1>
        </MotionDiv>
        <MotionDiv variants={childVariants} className="">
          <p>Who doesn&apos;t love to hear some good words? So drop some nice words for me along with your
            signature. It isn&apos;t neccessary to sign but just draw something cute :)</p>
          <SignButton />
        </MotionDiv>
        <MotionDiv variants={childVariants} className="">
          <h1 className='text-xl font-bold mt-3'>Hall of Signatures</h1>
        </MotionDiv>
        <MotionDiv variants={childVariants} className="">
          <SignatureCard />
        </MotionDiv>
      </section>
    </MotionHeader>
  )
}

export default Guestbook