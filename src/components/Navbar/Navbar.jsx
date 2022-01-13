import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Navbar.module.css';
import logo from '../../assets/images/shared/logo.svg';
import openImg from '../../assets/images/shared/icon-hamburger.svg';
import closeImg from '../../assets/images/shared/icon-close.svg';

const Links = [
  {
    number: '00',
    to: '/',
    name: 'HOME',
  },
  {
    number: '01',
    to: '/destination',
    name: 'DESTINATION',
  },
  {
    number: '02',
    to: '/crew',
    name: 'CREW',
  },
  {
    number: '03',
    to: '/technology',
    name: 'TECHNOLOGY',
  },
  {
    number: '04',
    to: '/404',
    name: 'SPACE 404',
  },
];

const Navbar = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  const openCloseHandler = () => {
    setIsNavBarOpen((prev) => !prev);
  };

  const closeHandler = () => {
    setIsNavBarOpen(false);
  };

  return (
    <nav className={classes.nav}>
      <div className={classes['logo-wrapper']}>
        <img src={logo} alt='logo' />
      </div>
      <div className={classes['open-close-control']} onClick={openCloseHandler}>
        {isNavBarOpen ? (
          <img src={closeImg} alt='hamburger' />
        ) : (
          <img src={openImg} alt='open' />
        )}
      </div>
      <ul
        className={`${classes.links} ${
          isNavBarOpen ? classes['links--showing'] : ''
        }`}
      >
        {Links.map((link, index) => {
          return (
            <li key={index} className={classes.link}>
              <NavLink
                to={link.to}
                className={'hover-down'}
                onClick={closeHandler}
              >
                <span>{link.number}</span> {link.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
