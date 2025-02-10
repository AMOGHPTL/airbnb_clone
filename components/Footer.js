import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 bg-gray-200 text-gray-600 px-32 py-14 gap-y-10 '>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold text-sm'>About</h5>
        <p>How airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb plus</p>
        <p>Airbnb luxe</p>
      </div>
      <div className='space-y-4 text-xs text-gray-800'>
      <h5 className='font-bold text-sm'>Community</h5>
        <p>Accesibility</p>
        <p>this is not real</p>
        <p>awesome</p>
        <p>referals</p>
        <p>ap</p>
      </div>
      <div className='space-y-4 text-xs text-gray-800'>
      <h5 className='font-bold text-sm'>Host</h5>
        <p>8*8</p>
        <p>36 zero waist</p>
        <p>might be lit</p>
        <p>hasrdest stuff</p>
        <p>stuff is stuff</p>
      </div>
      <div className='space-y-4 text-xs text-gray-800'>
      <h5 className='font-bold text-sm'>Support</h5>
        <p>support</p>
        <p>safety</p>
        <p>privacy</p>
        <p>contact</p>
        <p>compliant</p>
      </div>
    </div>
  )
}

export default Footer
