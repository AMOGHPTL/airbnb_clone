import React from 'react'
import Image from 'next/image'

function SmallCard({img , loc , dist}) {
  return (
    <div className='flex space-x-4 items-center cursor-pointer hover:bg-gray-100 hover:shadow-lg hover:scale-105 transition duration-200 ease-out p-1 m-3 rounded-xl'>
      <div className='relative h-16 w-16'>
        <Image Src={img} layout='fill' objectFit='contain' className='rounded-lg bg-red' />
      </div>
      <div>
        <h2>{loc}</h2>
        <h3 className='text-gray-500'>{dist}</h3>
      </div>
    </div>
  )
}

export default SmallCard
