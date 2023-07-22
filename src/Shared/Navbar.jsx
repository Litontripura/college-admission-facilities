import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

const Navbar = ({ colleges, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };
   
    const navOptions=<>
    <li><Link to="/">Home</Link></li>
    <li><Link to='/colleges'>Colleges</Link></li>
    <li><Link to="/admission">Admission</Link></li>
    <li><Link to="myCollege">My college</Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-5 shadow bg-base-100 rounded-box w-52 text-left ">
        {navOptions}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-4">
        {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
  <div className="flex items-center justify-center mt-4">
          <input
            type="text"
            className="w-96 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
            placeholder="Search by college name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="ml-2 bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
    <Link to="login">Login</Link>
    <Link><FaUserAlt></FaUserAlt></Link>
  </div>
</div>
    );
};

export default Navbar;