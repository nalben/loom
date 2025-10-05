import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Mainbutton.module.scss';
import Arrow from '@/assets/icons/monochrome/Arrow.svg'

type MainbuttonProps = {
  children: React.ReactNode;
  href?: string;
  to?: string;
  onClick?: () => void;
  variant?: 'standart' | 'arrow' | 'border' | 'dark';
  className?: string;
};

const Mainbutton: React.FC<MainbuttonProps> = ({
  children,
  href,
  to,
  onClick,
  variant = 'standart',
  className = '',
}) => {
  const variantClass = classes[variant] || '';

  const content = (
    <>
      <span className={classes.text}>{children}</span>
      {variant === 'arrow' && <span className={classes.arrow}><Arrow /></span>}
      {variant === 'border' && <span className={classes.decor}><Arrow /></span>}
    </>
  );

  if (to) {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          `${classes.container} ${variantClass} ${className} ${isActive ? classes.active : ''}`
        }
      >
        {content}
      </NavLink>
    );
  }

  if (href) {
    return (
      <a href={href} className={`${classes.container} ${variantClass} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${classes.container} ${variantClass} ${className}`}
    >
      {content}
    </button>
  );
};

export default Mainbutton;
