import React from 'react';

const DesktopNav = () => {
  return (
    <div className="hidden md:block">
      <div className="ml-10 flex items-baseline space-x-4">
        <a
          href="#"
          className="text-black hover:bg-gray-700  hover:text-white  px-3 py-2 rounded-md text-sm font-medium"
        >
          Dashboard
        </a>

        <a
          href="#"
          className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Team
        </a>

        <a
          href="#"
          className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Projects
        </a>

        <a
          href="#"
          className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Calendar
        </a>

        <a
          href="#"
          className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Reports
        </a>
      </div>
    </div>
  );
};

export default DesktopNav;