import React from 'react';
import Logo1 from '@/assets/icons/colored/Logo.svg'
import classes from './Logo.module.scss'
import { NavLink } from 'react-router-dom';

const Logo = () => {
    return (
        <div className={classes.logo}>
            <NavLink to="/home">
                <Logo1 />
            </NavLink>
            
        </div>
    );
};

export default Logo;