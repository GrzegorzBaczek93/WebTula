import React from 'react';

import '@styles/footer.css';
import ButtonWrapper from '@components/common/button-wrapper';
import InstaLogo from '@assets/insta_logo.png';
import EtsyLogo from '@assets/etsy_logo.svg';

const Footer = () => {
    return (
        <div className={`container`}>
            <hr className={`footer_separator`} />
            <div className={`buttons_container`}>
                <ButtonWrapper url={'https://www.instagram.com/tulamakes'}>
                    <img
                        src={InstaLogo}
                        alt={'Instagram'}
                        className='image_button'
                    />
                </ButtonWrapper>
                <ButtonWrapper url={'https://www.etsy.com/pl/shop/tulamakes'}>
                    <img
                        src={EtsyLogo}
                        alt={'Etsy'}
                        className='image_button'
                    />
                </ButtonWrapper>
            </div>
        </div>
    );
};

export default Footer;
