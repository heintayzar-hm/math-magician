import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/home',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];

  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  const style = {
    nav: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      padding: '10px',
    },
    h1: { color: 'red', fontSize: '30px', flexBasis: '40%' },
    ul: {
      display: 'flex',
      justifyContent: 'space-around',
      width: '100%',
    },
  };
  return (
    <nav style={style.nav} className="bg-black">
      <h1 style={style.h1}>Math Magician</h1>
      <div className="grid grid-cols-1 w-full">
        <button className="flex justify-end md:hidden" type="button" onClick={handleToggle}>
          {navbarOpen ? (
            <MdClose style={{ color: 'black', width: '40px', height: '40px' }} />
          ) : (
            <FiMenu style={{ color: '#7b7b7b', width: '40px', height: '40px' }} />
          )}

        </button>
        <ul className={`${navbarOpen ? 'grid grid-cols-1 justify-items-center ' : 'hidden flex items-center justify-around'} w-full md:flex`}>
          {links.map((link) => (
            <li key={link.id}>
              {' '}
              <NavLink
                to={link.path}
                onClick={() => closeMenu()}
                style={({ isActive }) => ({ color: isActive ? 'red' : 'white' })}
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
