import socialLinks from '@/staticdata/socialLinks'
import React from 'react'
import Buildspace from './Buildspace'

const Socials = () => {
  return (
    <section className='w-full mt-3 flex gap-2'>
       {socialLinks.map((social, index) => <a key={index} href={social.linkHref} target='_blank'>{social.linkIcon}</a>)}
       <a href='https://sage.buildspace.so/@nila-laishram-qE2IJnO' target='_blank'><Buildspace/></a>
    </section>
  )
}

export default Socials