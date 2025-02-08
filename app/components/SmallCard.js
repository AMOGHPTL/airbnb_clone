import React from 'react'
import Image from 'next/image'

function SmallCard({img , loc , dist}) {
  return (
    <div className='flex space-x-4 my-5 items-center'>
      <div className='relative h-14 w-14'>
        <Image alt='place' src={img} layout='fill' objectFit='contain' className='rounded-lg' />
      </div>
      <div>
        <p className='text-sm'>{loc}</p>
        <p className='text-xs'>{dist}</p>
      </div>
    </div>
  )
}

export default SmallCard
