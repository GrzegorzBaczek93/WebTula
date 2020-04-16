import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'gatsby';

import '@styles/burger-menu.css';
import ButtonWrapper from '@components/common/button-wrapper';

const BurgerMenu = () => {
    return (
        <Menu right disableAutoFocus>
            <Link to='/'>Home</Link>
            <Link to='/work'>Work</Link>
            <Link to='/comissions'>Comissions</Link>
            <Link to='/about'>About</Link>
            <ButtonWrapper url={'https://www.etsy.com/shop/tulamakes'}>
                <span className='bm-item'>Shop</span>
            </ButtonWrapper>
        </Menu>
    );
};

export default BurgerMenu;
