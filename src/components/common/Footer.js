import React from 'react';

import '@styles/footer.css';
import ImageButton from '@components/footer/ImageButton';

const Footer = () => {
    return (
        <div className={`container`}>
            <hr className={`separator`} />
            <div className={`buttons_container`}>
                <ImageButton
                    url={'https://www.etsy.com/pl/shop/tulamakes'}
                    src={'/etsy_logo.svg'}
                    alt={'Etsy'}
                />
                <ImageButton
                    url={'https://www.instagram.com/tulamakes'}
                    src={'/insta_logo.png'}
                    alt={'Instagram'}
                />
            </div>
        </div>
    );
};

export default Footer;
