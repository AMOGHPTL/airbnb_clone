import Image from 'next/image'
import React from 'react'

function MediumCard({img,title}) {
  return (
    <div className='space-y-2 hover:scale-105 transition duration-200 ease-out cursor-pointer'>
      <div className='relative h-80 w-80'>
        <Image src={img} layout='fill' objectFit='contain' className='rounded-lg'/>
      </div>
      <h1 className='text-xl'>{title}</h1>
    </div>
  )
}

export default MediumCard
