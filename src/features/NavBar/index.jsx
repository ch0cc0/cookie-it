import React from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import logo from '../../media/cookie-logo.svg'


function NavBar() {
    return (
      <div className=" text-white relative flex flex-row h-16 bg-zinc-800 space-x-1 items-center justify-center">
        <div className="absolute left-0 text-2xl hidden md:block ">
          {/*<img src={logo} alt="logo" />*/}
          <span className='title'>Cookie-It</span>
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