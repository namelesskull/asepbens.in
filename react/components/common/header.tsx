import React from 'react';

const Header = ({ text }: { text: string }) => {
  return (
    <div className='flex justify-start space-x-2 text-lg'>
      <span>{'>'}</span>
      <h1>{text}</h1>
    </div>
  );
};

export default Header;
