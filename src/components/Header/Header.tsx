import LogoShoppe from '@/assets/images/LogoShoppe'
import { arrow, FloatingPortal, offset, shift, useFloating } from '@floating-ui/react'
import { ChevronDownIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Popover from '@/components/Popover'
import { divide } from 'lodash'

const Header = () => {
  return (
    <div className='pb-5 pt-2 bg-[linear-gradient(-180deg,#f53d2d,#f63)] text-white'>
      <div className='container'>
        <div className='flex justify-end'>
          <Popover
            className='flex items-center py-1 hover:text-gray-300 cursor-pointer'
            renderPopover={
              <div className='bg-white relative shadow-md rounded-sm border border-gray-200'>
                <div className='flex flex-col py-2 px-3'>
                  <button className='py-2 px-3 hover:text-orange'>Tiếng Việt</button>
                  <button className='py-2 px-3 hover:text-orange mt-2'>English</button>
                </div>
              </div>
            }
          >
            <GlobeAltIcon className='h-6 w-6 text-gray-300' />
            <span className='mx-1'>Tiếng Việt</span>
            <ChevronDownIcon className='h-5 w-5 text-gray-300' />
          </Popover>
          <Popover
            className='flex items-center py-1 hover:text-gray-300 cursor-pointer ml-5'
            renderPopover={
              <div className='bg-white relative shadow-md rounded-sm border border-gray-200'>
                <Link
                  to='/profile'
                  className='block py-2 px-3 hover:bg-slate-100 bg-white hover:text-cyan-500 text-left'
                >
                  Tài khoản của tôi
                </Link>
                <Link to='/' className='block py-2 px-3 hover:bg-slate-100 bg-white hover:text-cyan-500 text-left'>
                  Đơn mua
                </Link>
                <button className='block py-2 px-3 w-full hover:bg-slate-100 bg-white hover:text-cyan-500 text-left'>
                  Đăng xuất
                </button>
              </div>
            }
          >
            <div className='w-6 h-6 mr-2 flex-shrink-0'>
              <img
                src='https://cdn.dribbble.com/userupload/3075502/file/original-e45d64f17d751c023f241dea1837c995.jpg?compress=1&resize=752x564'
                alt='avatar'
                className='w-full h-full object-cover rounded-full'
              />
            </div>
            <div>tuanta1</div>
          </Popover>
        </div>
        <div className='grid grid-cols-12 gap-4 mt-4 items-end'>
          <Link to='/' className='col-span-2'>
            <LogoShoppe className='h-11 fill-white' />
          </Link>
          <form className='col-span-9'>
            <div className='bg-white rounded-sm p-1 flex'>
              <input
                type='text'
                name='search'
                className='text-black px-3 py-2 flex-grow border-none outline-none bg-transparent'
                placeholder='FREE SHIP ĐƠN TỪ 0Đ'
              />
              <button className='rounded-sm py-2 px-6 flex-shrink-0 bg-orange hover:opacity-90'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                  />
                </svg>
              </button>
            </div>
          </form>
          <div className='col-span-1 justify-self-start'>
            <Popover
              placement='bottom-end'
              renderPopover={
                <div className='bg-white relative shadow-md rounded-sm border border-gray-200 max-w-[400px] text-sm'>
                  <div className='p-2'>
                    <div className='text-gray-400 capitalize'>Sản phẩm mới thêm</div>
                    <div className='mt-5'>
                      <div className='mt-4 flex'>
                        <div className='flex-shrink-0'>
                          <img
                            src='https://cf.shopee.vn/file/37a9ae94904534a963e885f987637c93_tn'
                            className='w-11 h-11 object-cover'
                            alt='anh'
                          />
                        </div>
                        <div className='flex-grow ml-2 overflow-hidden'>
                          <div className='truncate'>
                            Áo giữ nhiệt nam cổ cao 3 phân cao cấp, Áo thun giữ nhiệt nam 2 lớp cực ấm - Rman
                          </div>
                        </div>
                        <div className='ml-2 flex-shrink-0'>
                          <span className='text-orange'>đ55.000</span>
                        </div>
                      </div>
                    </div>
                    <div className='flex mt-6 items-center justify-between'>
                      <div className='capitalize text-xs text-gray-500'>Thêm vào giỏ hàng</div>
                      <button className='capitalize bg-orange hover:bg-opacity-90 px-4 py-2 rounded-sm text-white'>
                        Xem giỏ hàng
                      </button>
                    </div>
                  </div>
                </div>
              }
            >
              <Link to='/cart' className=''>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-8 h-8'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                  />
                </svg>
              </Link>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
