import React, { type ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="bg-gray-300 dark:bg-red-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
      {children}
    </button>
  );
};

export { Button };
