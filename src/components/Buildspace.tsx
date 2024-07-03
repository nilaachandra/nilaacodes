import Image from 'next/image'
import React from 'react'

const Buildspace = () => {
  return (
    <div className='bg-black p-1 rounded-md dark:border-white dark:border'>
        <Image src='/buildspace-logo.png' alt='' width={24} height={24}/>
    </div>
  )
}

export default Buildspace