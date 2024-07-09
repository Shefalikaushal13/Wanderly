import React from 'react';

export default function Footer() {
  return (
    <footer className=" mt-10 bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-7 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
            <i className="fab fa-x"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Developed by Shefali Kaushal
        </p>
      </div>
    </footer>
  );
}
