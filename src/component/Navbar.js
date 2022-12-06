import React from 'react';
import { NavLink } from 'react-router-dom';

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
      alignItems: 'center',
      justifyContent: 'space-around',
      width: '100%',
    },
  };
  return (
    <nav style={style.nav}>
      <h1 style={style.h1}>Math Magician</h1>
      <ul style={style.ul}>
        {links.map((link) => (
          <li key={link.id}>
            {' '}
            <NavLink
              to={link.path}
              style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
