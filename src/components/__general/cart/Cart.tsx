import React from 'react';
import classes from './Cart.module.scss'
import Cart_icon from '@/assets/icons/monochrome/Cart.svg'

const Cart = () => {
    return (
        <div className={classes.container}>
            <Cart_icon />
        </div>
    );
};

export default Cart;