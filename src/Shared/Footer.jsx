import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-2">Your College Booking App</h2>
          <p className="text-sm text-gray-400">
            Book college services and facilities with ease.
          </p>
        </div>
        <div className="flex justify-center items-center mt-4">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center mt-6">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Your College Booking App. All rights reserved.
        </p>
      </div>
    </footer>
    );
};

export default Footer;