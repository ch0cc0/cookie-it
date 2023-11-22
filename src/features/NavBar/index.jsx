import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import logo from '../../media/cookie-logo.svg'


function NavBar() {
    return (
      <div class="select-none text-white flex flex-row h-16 bg-[#080202] space-x-1 items-center justify-center fixed top-0 left-0 right-0">
        <div class="absolute left-0 text-2xl flex">
          <img class="object-cover w-12 animate-bounce ml-2 mt-1" src={logo} alt="logo" />
          <span class="ml-3 hidden md:block mt-2">Cookie-It</span>
        </div>
        <form class="space-x-3 text-black">
          <input class="rounded-lg md:w-96 p-2"
            type="text"
            placeholder="Search"
            aria-label="Search posts"
          />
          <button type="submit" aria-label="Search">
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#FFFFFF",}} />
          </button>
        </form>
      </div>
    );
  }
  
  export default NavBar;