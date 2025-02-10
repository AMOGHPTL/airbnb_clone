import Image from 'next/image'
import React from 'react'

function LargeCard({img,title,description,buttonText}) {
  return (
    <div className='py-16 relative'>
      <div className='relative h-96 min-w-[300px]'>
        <Image src={img} layout='fill' objectFit='cover' className='rounded-lg'/>
      </div>
      <div className='max-w-[300px] space-y-3 absolute top-32 left-12'>
        <h1 className='text-4xl'>{title}</h1>
        <h3>{description}</h3>
        <button className='bg-black text-white py-2 px-3 rounded-lg cursor-pointer hover:shadow-md active:scale-90 transition duration-200'>{buttonText}</button>
      </div>
    </div>
  )
}

export default LargeCard