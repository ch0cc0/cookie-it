import React from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import logo from '../../media/cookie-logo.svg'


function NavBar() {
    return (
      <div className="navbar">
        <div className="navbar-logo">
          {/*<img src={logo} alt="logo" />*/}
          <span className='title'>Cookie-It</span>
        </div>
        <form className="search" >
          <input
            type="text"
            placeholder="Search"
            aria-label="Search posts"
          />
          <button type="submit" aria-label="Search">
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#000000",}} />
          </button>
        </form>
      </div>
    );
  }
  
  export default NavBar;