import React from 'react';
import Logo1 from '@/assets/icons/colored/Logo.svg'
import classes from './Logo.module.scss'

const Logo = () => {
    return (
        <div className={classes.logo}>
            <Logo1 />
        </div>
    );
};

export default Logo;