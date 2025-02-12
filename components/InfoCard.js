import { HeartIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import React from 'react'

function InfoCard({img,location,title,description,star,price,total,lon,lat}) {
  return (
    <div className='flex pt-5 pb-5 md:p-7 md:m-5 border-b rounded-lg cursor-pointer hover:opacity-80 hover:scale-105 
    hover:shadow-lg active:scale-100 transition transform duration-150 ease-out first:border-t'>
      <div className='relative h-24 w-40 min-w-40 md:h-52 md:w-80 flex-shrink-0'> 
      <Image src={img} layout='fill' objectFit='cover' className='rounded-xl'/>
      </div>
      <div className='flex-grow flex flex-col pl-5'>
       <div className=' flex justify-between'>
        <p className='text-xs'>{location}</p>
        <HeartIcon className='h-4 md:h-7 cursor-pointer hover:fill-red-400 hover:text-red-400'/>
       </div>
       <div className='space-y-3 md:space-y-5'>
        <h2 className='text-sm md:text-lg font-semibold'>{title}</h2>
        <p className='hidden md:inline-flex text-xs'>{description}</p>
       </div>
       <div className='flex flex-grow justify-between items-end pt-2 md:pt-5'>
        <div className='flex items-center'>
         <StarIcon className='text-red-400 h-3 md:h-4'/>
         <p className='text-xs'>{star}</p>
        </div>
        <div>
         <p className='text-md lg:text-2xl font-semibold pb-2'>{price}</p>
         <p className='text-sm text-right font-extralight'>{total}</p>
        </div>
       </div>
      </div>
    </div>

  )
}

export default InfoCard;
