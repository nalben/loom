import React from 'react';
import Star from '@/assets/icons/monochrome/Star.svg'
import classes from './Icon.module.scss'

const Icon = () => {
    return (
        <div className={classes.container}>
            <Star />
        </div>
    );
};

export default Icon;