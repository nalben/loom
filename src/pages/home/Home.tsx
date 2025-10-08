import Mainbutton from '@/components/__UI/mainbutton/Mainbutton';
import classes from './Home.module.scss'
import React from 'react';
import Header from '@/components/__general/header/Header';
import Hero from '@/components/_home/hero/Hero';
const Home = () => {



    return (
        <div className={`${classes.home} gap`}>
            <Hero />
        </div>
        
    );
};

export default Home;