import React from 'react';
import { useLocation } from 'react-router-dom';
import classes from './Header.module.scss';
import Mainbutton from '@/components/__UI/mainbutton/Mainbutton';
import Logo from '../../__UI/logo/Logo';
import Cart from '../cart/Cart';
import Burger from '../burger/Burger';

const Header = () => {
  const location = useLocation();

  // функция для проверки активного пути
  const isActive = (path: string) => location.pathname.includes(path);

  return (
    <div className={classes.container}>
      <nav className={classes.menu}>
        <div className={classes.left}>
          <Mainbutton
            to="home"
            variant={isActive('home') ? 'dark' : 'dark_disable'}
          >
            Home
          </Mainbutton>

          <Mainbutton
            to="product"
            variant={isActive('product') ? 'dark' : 'dark_disable'}
          >
            Products
          </Mainbutton>
        </div>

        <Logo />

        <div className={classes.right}>
          <Cart />
          <Mainbutton
            to="contact"
            variant='standart'
          >
            Contact
          </Mainbutton>
        </div>
        <Burger />
      </nav>
    </div>
  );
};

export default Header;
