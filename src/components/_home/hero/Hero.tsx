import React from 'react';
import classes from './Hero.module.scss';
import img from '@/assets/img/Home_back.png'

const Hero = () => {

  return (
    <div className={classes.container}>
        <img src={img} alt="" />
    </div>
  );
};

export default Hero;
