import React from 'react';

export default function Footer() {
  return (
    <footer className=" bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-7">
          <a href="https://github.com/Shefalikaushal13" target="_blank" rel="noopener noreferrer" className="hover:text-black">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.instagram.com/shefalikaushal_23?igsh=MWhqdXBrdmd3Z3Bycg==" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/shefalikaushal/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://x.com/shefaliu_u" target="_blank" rel="noopener noreferrer" className="hover:text-black">
            <i className="fab fa-x"></i>
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Developed by Shefali Kaushal
        </p>
      </div>
    </footer>
  );
}
