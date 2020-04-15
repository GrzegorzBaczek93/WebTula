import React from 'react';
import { Link } from 'gatsby';

import '@styles/header.css';
import Logo from '@components/header/logo';
import ButtonWrapper from '@components/common/button-wrapper';

const Header = () => {
    return (
        <div className={`header_container`}>
            <div className={`header_button_container`}>
                <Logo />
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
            </div>
        </div>
    );
};

export default Header;
