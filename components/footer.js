import React from 'react';

import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { IconButton } from '@mui/material';

export default function Footer() {
  return (
    <>
      <footer className='hidden md:block'>
        <div className='py-11 container mx-auto max-w-7xl mx-auto px-10 xl:px-12 flex flex-nowrap text-left md:gap-3 lg:text-left gap-4'>
          <div className='w-3/12'>
            <span className='text-xl font-bold text-blueGray-700'>
              Download
            </span>

            <div className='flex flex-col justify-center gap-4 mt-8 w-fit'>
              <div className='flex items-center border w-full rounded-lg px-3 py-2  bg-black'>
                <img
                  src='https://cdn-icons-png.flaticon.com/512/888/888857.png'
                  className='w-7 md:w-6 lg:w-8'
                />
                <div className='text-left ml-3'>
                  <p className='text-xs text-gray-200'>Download on </p>
                  <p className='text-sm md:text-base'> Google Play </p>
                </div>
              </div>
              <div className='flex items-center border w-full rounded-lg px-2 py-2 bg-black'>
                <img
                  src='https://cdn-icons-png.flaticon.com/512/888/888841.png'
                  className='w-7 md:w-6 lg:w-8'
                />
                <div className='text-left ml-3'>
                  <p className='text-xs text-gray-200'>Download on </p>
                  <p className='text-sm md:text-base'> Apple Store </p>
                </div>
              </div>
            </div>
          </div>

          <div className='w-3/12'>
            <span className='block text-xl font-bold'>Menu</span>
            <ul className='list-unstyled mt-8'>
              {menuItems.map((el) => (
                <li key={el.value}>
                  <a
                    className='font-semibold block pb-2 text-md w-fit'
                    href={el.value}
                  >
                    {el.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='w-3/12'>
            <span className='block text-xl font-semibold'>Contact Us</span>
            <ul className='list-unstyled mt-8 pr-7'>
              <li>
                <div className='font-semibold block pb-2 text-sm w-fit'>
                  House # 8, Road # 14, Dhanmondi Dhaka-1209.
                </div>
              </li>
              <li>
                <div className='font-semibold block pb-2 text-sm w-fit'>
                  Email: support@evaly.com.bd
                </div>
              </li>
              <li>
                <div className='font-semibold block pb-2 text-sm w-fit'>
                  Contact no: 090189287272
                </div>
              </li>
            </ul>
          </div>

          <div className='w-3/12 flex flex-col'>
            <span className='block text-xl font-semibold'>Get In Touch</span>
            <div className='flex mt-8'>
              <a type='link' className='w-9 mr-2'>
                <img src='/social/facebook.png' alt='facebook' />
              </a>
              <a type='link' className='w-9 mr-2'>
                <img src='/social/insta.png' alt='facebook' />
              </a>
              <a type='link' className='w-9 mr-2'>
                <img src='/social/youtube.png' alt='facebook' />
              </a>
            </div>
          </div>
        </div>

        <hr />
        <div className='py-7 copyight flex flex-wrap items-center md:justify-between justify-center'>
          <div className='w-full px-4 mx-auto text-center'>
            <div className='text-sm font-semibold py-1'>
              © <span id='get-current-year'>2023</span> E-valy.com Limited. All
              rights reserved
            </div>
          </div>
        </div>
      </footer>

      <footer className='mb-11 md:mb-0 md:hidden'>
        <div className='py-11 container mx-auto max-w-7xl mx-auto px-10 xl:px-12 flex flex-col text-center items-center gap-16'>
          <div>
            <span className='text-xl font-bold text-blueGray-700'>
              Download
            </span>

            <div className='flex flex-col sm:flex-row items-center gap-4 mt-8 w-fit'>
              <div className='flex items-center border w-[155px] rounded-lg px-3 py-2  bg-black'>
                <img
                  src='https://cdn-icons-png.flaticon.com/512/888/888857.png'
                  className='w-7 md:w-8'
                />
                <div className='text-left ml-3'>
                  <p className='text-xs text-gray-200'>Download on </p>
                  <p className='text-sm md:text-base text-white'>Google Play</p>
                </div>
              </div>
              <div className='flex items-center border w-[155px] rounded-lg px-2 py-2 bg-black'>
                <img
                  src='https://cdn-icons-png.flaticon.com/512/888/888841.png'
                  className='w-7 sm:w-8'
                />
                <div className='text-left ml-3'>
                  <p className='text-xs text-gray-200'>Download on </p>
                  <p className='text-sm sm:text-base text-white'>Apple Store</p>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full flex flex-col sm:flex-row gap-9 sm:gap-4 justify-between items-center sm:items-baseline'>
            <div className='flex-1 flex flex-col items-stretch justify-between gap-6 sm:gap-9 min-w-[160px]'>
              <span className='block text-xl font-bold'>Menu</span>
              <ul className='list-unstyled'>
                {menuItems.map((el) => (
                  <li key={el.value}>
                    <a
                      className='font-semibold block pb-5 text-md w-fit mx-auto'
                      href={el.value}
                    >
                      {el.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex flex-1 flex-col items-center gap-7 sm:gap-10'>
              <span className='block text-xl font-bold'>Contact Us</span>
              <ul className='list-unstyled w-[260px]'>
                <li>
                  <div className='font-semibold block pb-5 sm:pb-8 text-sm w-fit  mx-auto'>
                    House # 8, Road # 14, Dhanmondi Dhaka-1209.
                  </div>
                </li>
                <li>
                  <div className='font-semibold block pb-5 sm:pb-8 text-sm w-fit  mx-auto'>
                    Email: support@evaly.com.bd
                  </div>
                </li>
                <li>
                  <div className='font-semibold block pb-5 sm:pb-8 text-sm w-fit  mx-auto'>
                    Contact no: 090189287272
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <span className='text-xl font-bold text-blueGray-700'>
              Get In Touch
            </span>

            <div className='flex mt-8 gap-3'>
              <a type='link' className='w-9'>
                <img src='/social/facebook.png' alt='facebook' />
              </a>
              <a type='link' className='w-9'>
                <img src='/social/insta.png' alt='facebook' />
              </a>
              <a type='link' className='w-9'>
                <img src='/social/youtube.png' alt='facebook' />
              </a>
            </div>
          </div>
        </div>

        <hr />
        <div className='py-7 copyight flex flex-wrap items-center md:justify-between justify-center'>
          <div className='w-full px-4 mx-auto text-center'>
            <div className='text-sm font-semibold py-1'>
              © <span id='get-current-year'>2023</span> E-valy.com Limited. All
              rights reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

const menuItems = [
  { label: 'Privacy Policy', value: '/privacy-policy' },
  { label: 'Cookie Policy', value: '/cookie-policy' },
  { label: 'Purchasing Policy', value: '/purchasing-policy' },
  { label: 'Terms & Conditions', value: '/terms' },
  { label: 'Career', value: '/career' },
];
