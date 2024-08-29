import SignButton from '@/components/Sign-button';
import SignatureCanvas from '@/components/SignatureCanvas'
import { Button } from '@/components/ui/button'
import React from 'react'
import { FaSignature } from "react-icons/fa";
const Guestbook = () => {
  return (
    <section className='w-full'>
      <h1 className='text-2xl font-bold'>My Guestbook</h1>
      <p>Who doesn&apos;t love to hear some good words? So drop some nice words for me along with your
        signature. It isn&apos;t neccessary to sign but just draw something cute :)</p>
      <SignButton />
      <h1>It is Still in progress btw, just deployed this to check something!</h1>
    </section>
  )
}

export default Guestbook