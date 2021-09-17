import React from 'react';

function Button({ children }) {
  return (
    <button className='bg-green hover:bg-green-800 text-white font-bold py-2 px-8 rounded'>
      {children}
    </button>
  );
}

export default Button;
