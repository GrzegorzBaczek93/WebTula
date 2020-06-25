import React from 'react';

const HoverImageButton = ({
    alt,
    className,
    hoverSrc,
    unhoverSrc,
    onClick,
}) => {
    const hover = element => {
        element.currentTarget.src = hoverSrc;
    };

    const unhover = element => {
        element.currentTarget.src = unhoverSrc;
    };

    return (
        <img
            alt={alt}
            className={className}
            src={unhoverSrc}
            onMouseOver={hover}
            onMouseOut={unhover}
            onFocus={hover}
            onBlur={unhover}
            onClick={() => onClick()}
        />
    );
};

export default HoverImageButton;
