import React from 'react';

const DesktopNav = () => {
  return (
    <div className="hidden md:block">
      <div className="flex items-baseline justify-between">

        <a
          href="/"
          className="text-black hhover:text-gray-500  px-3 py-2 rounded-md text-xl uppercase font-semibold"
        >
          Squamish Doula Collective
        </a>

        <div>
          <a
            href="/"
            className="text-black hover:text-gray-500 px-3 py-2 rounded-md text-xl uppercase font-semibold"
          >
            About
          </a>

          <a
            href="/"
            className="text-black hover:text-gray-500 px-3 py-2 rounded-md text-xl uppercase font-semibold"
          >
            Meet Us
          </a>

          <a
            href="/"
            className="text-black hover:text-gray-500 px-3 py-2 rounded-md text-xl uppercase font-semibold"
          >
            Connect
          </a>
        </div>

      </div>
    </div>
  );
};

export default DesktopNav;