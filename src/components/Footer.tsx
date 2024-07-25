import React from 'react'
import DateTime from './DateTime'
import { TiLocationArrowOutline } from 'react-icons/ti'

const Footer = () => {
  return (
    <footer className="mt-4">
        {" "}
        <div className='flex justify-between'>
       {" "}
        <DateTime formatString="MMMM d, yyyy HH:mm:ss" />
        </div>
        <p>&copy;2024 Nilaacodes || All Rights Reserved</p>
      </footer>
  )
}

export default Footer