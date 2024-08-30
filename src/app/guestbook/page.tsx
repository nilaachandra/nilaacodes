import SignButton from '@/app/guestbook/Sign-button';
import SignatureCanvas from '@/app/guestbook/SignatureCanvas'
import { Button } from '@/components/ui/button'
import React from 'react'
import { FaSignature } from "react-icons/fa";
import { PostsQuery, SignatureCard } from './SignatureCard';
import { fetchPosts } from './guestActions';
const Guestbook = async () => {
  let posts: PostsQuery[] = [];
    try {
        posts = await fetchPosts();
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
  return (
    <section className='w-full'>
      <h1 className='text-2xl font-bold mb-3'>My Guestbook</h1>
      <p>Who doesn&apos;t love to hear some good words? So drop some nice words for me along with your
        signature. It isn&apos;t neccessary to sign but just draw something cute :)</p>
      <SignButton />
      <h1 className='text-xl font-bold mt-3'>Hall of Signatures</h1>
      <SignatureCard posts={posts}/>
    </section>
  )
}

export default Guestbook