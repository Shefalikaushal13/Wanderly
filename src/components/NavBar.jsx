import React from 'react';
import logo from '../assets/logo2.png';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-gray-800">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-12 h-10 mr-3" />
        <span className="text-white text-xl font-bold">SWOLEMATE</span>
      </div>
    </nav>
  );
}

export default Navbar;
2
