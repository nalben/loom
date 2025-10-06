import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import classes from './App.module.scss';
import "@/styles/general.scss";
import "@/styles/fonts.scss";
import "@/styles/variables.scss";
import Header from '../__general/header/Header';




const Root = () => (
    <div className={classes.sitecon}>
        <div className={classes.sitewrapper}>
            <main className={classes.pagecontent}>
                <Header />
                <Outlet />
            </main>
        </div>
    </div>
);


export default Root;


