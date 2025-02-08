import React from 'react'
import Image from 'next/image'

function SmallCard({img , loc , dist}) {
  return (
    <div className='flex space-x-4 my-5 items-center cursor-pointer hover:shadow-lg active:scale-90 transition duration-150'>
      <div className='relative h-14 w-14'>
        <Image Src="https://picsum.photos/200" layout='fill' objectFit='contain' className='rounded-lg bg-red' />
      </div>
      <div>
        <p className='text-sm'>{loc}</p>
        <p className='text-xs'>{dist}</p>
      </div>
    </div>
  )
}

export default SmallCard
