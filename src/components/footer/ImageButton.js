import React from 'react';

import '@styles/footer-image-button.css';

const ImageButton = ({ url, src, css, alt }) => {
    return (
        <a href={url} target='_blank' rel='noopener noreferrer'>
            <img src={src} alt={alt} className='image_button' />
        </a>
    );
};

export default ImageButton;
