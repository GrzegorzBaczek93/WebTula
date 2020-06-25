import React from 'react';
import { Link } from 'gatsby';

import '@styles/header.css';
import ButtonWrapper from '@components/common/button-wrapper';

const TabMenu = () => {
    return (
        <div>
            <Link className={`header_button`} to='/'>
                Home
            </Link>
            <Link className={`header_button`} to='/work'>
                Work
            </Link>
            <Link className={`header_button`} to='/comissions'>
                Comissions
            </Link>
            <Link className={`header_button`} to='/about'>
                About
            </Link>
            <ButtonWrapper url={'https://www.etsy.com/shop/tulamakes'}>
                <span className={`header_button`}>Shop</span>
            </ButtonWrapper>
        </div>
    );
};

export default TabMenu;
