import React from 'react';
import BioListItem from './BioListItem';

const BioList = () => {
  
  return (
    <div className='absolute top-0 z-10 mt-32 max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 left-0 right-0'>
      <BioListItem />
      <BioListItem />
      <BioListItem />
      <BioListItem />
      <BioListItem />
    </div>
  );
};

export default BioList;