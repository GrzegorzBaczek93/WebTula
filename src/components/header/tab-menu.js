import React from 'react';

import '@styles/header.css';
import ButtonWrapper from '@components/common/button-wrapper';
import LinkButton from '@components/header/link-button';

const TabMenu = () => {
    return (
        <div className={`tab_menu`}>
            <LinkButton text='Home' pathName='/' />
            <LinkButton text='Work' pathName='/work' />
            <LinkButton text='Comissions' pathName='/comissions' />
            <LinkButton text='About' pathName='/about' />
            <ButtonWrapper url={'https://www.etsy.com/shop/tulamakes'}>
                <span className={`header_button`}>Shop</span>
            </ButtonWrapper>
        </div>
    );
};

export default TabMenu;
