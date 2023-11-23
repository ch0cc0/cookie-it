import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import logo from '../../media/cookie-logo.svg'
import { useNavigate } from 'react-router-dom';


function NavBar() {
  const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/r/${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div class="select-none text-white flex flex-row h-16 bg-[#080202] space-x-1 items-center justify-center fixed top-0 left-0 right-0">
      <div class="absolute left-0 text-2xl flex">
        <img class="object-cover w-12 animate-bounce ml-2 mt-1 hidden md:block" src={logo} alt="logo" />
        <span class="ml-3 hidden md:block mt-2">Cookie-It</span>
      </div>
      <form class="flex space-x-3 text-black sm:w-4/6 md:w-1/2 lg:w-2/6" onSubmit={handleSubmit}>
        <p className='text-white font-bold text-xl mt-1'>r/</p>
        <input class="rounded-lg sm:w-5/6 md:w-5/6 lg:w-5/6 p-2 text-md font-bold"
          type="text"
          placeholder="Search"
          aria-label="Search posts"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" aria-label="Search">
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#FFFFFF",}} />
        </button>
      </form>
    </div>
  );
}

export default NavBar;