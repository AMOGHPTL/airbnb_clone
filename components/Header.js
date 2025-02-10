
import Image from 'next/image'
import React, { useState } from 'react'
import {SearchIcon,GlobeAltIcon,MenuIcon,UserCircleIcon,UsersIcon,} from "@heroicons/react/solid"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/navigation';

function Header({placeholder}) {
  const [searchInput,setSearchInput] = useState("");
  const [startDate,setStartDate] = useState(new Date());
  const [endDate,setEndDate] = useState(new Date());
  const router = useRouter();

  const selectionRange = {
    startDate : startDate,
    endDate : endDate,
    key : 'selection'
  }

  const handleSelect = (ranges) => {
     setStartDate(ranges.selection.startDate);
     setEndDate(ranges.selection.endDate);
  }

  const [guestNumber,setGuestNumber] = useState(1);

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        guestNumber,
      }
    })
    resetAllFields();
  }

  const resetAllFields = () => {
    setSearchInput("");
    setGuestNumber(1);
    setStartDate(new Date());
    setEndDate(new Date());
  }


  return (
    <header
     className='relative stiky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10 text-black'>
      {/**left */}
      <div onClick={() => router.push("/")}
      className='relative flex items-center h-10 cursor-pointer'>
        <Image src="https://links.papareact.com/qd3" layout='fill' objectFit='contain' objectPosition='left'/>
      </div>

      {/**mid-search */}
      <div
       className='border border-solid border-gray-300 flex rounded-full px-1 pl-3 align-middle md:shadow-sm'>
        <input value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} type='text' placeholder={placeholder||'start your search'} className='flex-grow h-6 self-center outline-none text-black w-full truncate placeholder-elipsis'/>
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
      {searchInput && (<div className='flex flex-col col-span-3 mx-auto'>
        <DateRangePicker ranges={[selectionRange]} 
        minDate={new Date()}
        rangeColors={["#FD5B61"]}
        onChange={handleSelect}
        />
        <div className='flex items-center justify-between px-3 border-b border-gray-300'>
          <h2 className='text-2xl'>Number of Guests</h2>
          <div className='flex space-x-2 items-center'>
           <UsersIcon className='h-5'/>
           <input value={guestNumber} type='number' min={1} onChange={(e)=>setGuestNumber(e.target.value)} className='w-10 outline-none text-red-400'></input>
          </div>
        </div>
        <div className='flex pt-2'>
          <button onClick={resetAllFields} className='flex-grow text-gray-500'>cancel</button>
          <button onClick={search} className='flex-grow text-red-400'>search</button>
        </div>
        </div>
        )}
    </header>
  )
}

export default Header
