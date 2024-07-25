import React from 'react'
import { MdOutlineLocationOn } from "react-icons/md";
import LocationDistance from './LocationDistance'

const MyLocation = () => {
  return (
    <div className='w-full flex items-center gap-2'>
        <span>✈️</span>
         <a
          href="https://en.wikipedia.org/wiki/Silchar"
          className="underline flex items-center gap-1"
          target="_blank"
        >
          

          <span>Silchar, Assam, India</span>
        </a>
        |<LocationDistance/>
    </div>
  )
}

export default MyLocation