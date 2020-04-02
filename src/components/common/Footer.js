import React from 'react';

import '@styles/footer.css';
import ButtonWrapper from '@components/common/ButtonWrapper';

const Footer = () => {
    return (
        <div className={`container`}>
            <hr className={`separator`} />
            <div className={`buttons_container`}>
                <ButtonWrapper url={'https://www.etsy.com/pl/shop/tulamakes'}>
                    <img
                        src={'/etsy_logo.svg'}
                        alt={'Etsy'}
                        className='image_button'
                    />
                </ButtonWrapper>
                <ButtonWrapper url={'https://www.instagram.com/tulamakes'}>
                    <img
                        src={'/insta_logo.png'}
                        alt={'Instagram'}
                        className='image_button'
                    />
                </ButtonWrapper>
            </div>
        </div>
    );
};

export default Footer;
