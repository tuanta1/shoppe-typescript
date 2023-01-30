import React from 'react'
import { ChevronDownIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

const Header = () => {
  return (
    <div className='pb-5 pt-2 bg-[linear-gradient(-180deg,#f53d2d,#f63)]'>
      <div className='container'>
        <div className='flex justify-end'>
          <div className='flex items-center py-1 hover:text-gray-300 cursor-pointer'>
            <GlobeAltIcon className='h-6 w-6 text-gray-300' />
            <span className='mx-1'>Tiếng Việt</span>
            <ChevronDownIcon className='h-6 w-6 text-gray-300' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
