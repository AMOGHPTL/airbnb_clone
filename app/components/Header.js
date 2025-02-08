import Image from 'next/image'
import React from 'react'
import {SearchIcon,GlobeAltIcon,MenuIcon,UserCircleIcon,UsersIcon} from "@heroicons/react/solid"

function Header() {
  return (
    <header
     className='relative stiky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10 text-black'>
      {/**left */}
      <div 
      className='relative flex items-center h-10 cursor-pointer'>
        <Image src="https://links.papareact.com/qd3" layout='fill' objectFit='contain' objectPosition='left'/>
      </div>

      {/**mid-search */}
      <div
       className='border border-solid border-gray-300 flex rounded-full px-1 pl-3 align-middle md:shadow-sm'>
        <input type='text' placeholder='start your search' className='flex-grow h-6 self-center outline-none text-black w-full truncate placeholder-elipsis'/>
        <SearchIcon 
        className='fill-white h-8 w-8 bg-red-400 rounded-full px-2 py-2 self-center cursor-pointer hidden md:inline-flex md:ml-2'/>
      </div>
      {/**right */}
      <div className=
      "text-gray-500 flex space-x-4 items-center justify-end" >
        <p className='cursor-pointer hidden md:inline-flex'>Become a host</p>
        <GlobeAltIcon className='h-6 cursor-pointer'/>
        <div className='flex border-2 rounded-full p-2 md:shadow-sm space-x-2'>
          <MenuIcon className='h-6 cursor-pointer'/>
          <UserCircleIcon className='h-6 cursor-pointer'/>
        </div>
      </div>
    </header>
  )
}

export default Header
