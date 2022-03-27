import React, { useState } from 'react'
import { Transition } from '@headlessui/react'
import DesktopNav from './components/DesktopNav'
import MobileNav from './components/MobileNav'

function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <nav className='absolute top-0 z-20 w-full bg-transparent font-display pb-4'>
        <div className='mx-12 sm:mx-16 md:mx-20 lg:mx-24 xl:mx-28 sm:px-6 lg:px-8 py-4'>
          <DesktopNav />
          <MobileNav setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>

        <Transition
          show={isOpen}
          enter='transition ease-out duration-100 transform'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='transition ease-in duration-75 transform'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          {(ref) => (
            <div className='md:hidden' id='mobile-menu'>
              <div ref={ref} className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                <a
                  href='/'
                  className='hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-xl font-medium'
                >
                  Dashboard
                </a>

                <a
                  href='/'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-xl font-medium'
                >
                  Team
                </a>

                <a
                  href='/'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-xl font-medium'
                >
                  Projects
                </a>

                <a
                  href='/'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-xl font-medium'
                >
                  Calendar
                </a>

                <a
                  href='/'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-xl font-medium'
                >
                  Reports
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  )
}

export default Nav
