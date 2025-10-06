import React, { useState, useEffect, useRef } from 'react';
import classes from './Burger.module.scss';
import Burger_icon from '@/assets/icons/monochrome/Burger.svg';
import { NavLink } from 'react-router-dom';

const Burger = () => {
  const [isActive, setIsActive] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleMenu = () => setIsActive(!isActive);
  const closeMenu = () => setIsActive(false);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        !target.closest(`.${classes.icon}`)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className={classes.container}>
      <button
        className={`${classes.icon} ${isActive ? classes.active : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <Burger_icon />
      </button>

      <nav
        ref={menuRef}
        className={`${classes.menu} ${isActive ? classes.active : ''}`}
      >
        <NavLink to="/home" onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/product" onClick={closeMenu}>
          Products
        </NavLink>
        <NavLink to="/contact" onClick={closeMenu}>
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default Burger;
