import React from 'react';
import { Link } from 'gatsby';

import '@styles/header-logo.css';

const Logo = () => {
    return (
        <Link to='/'>
            <img src={'tulamakes_logo.png'} alt={'Logo'} className={'logo'} />
        </Link>
    );
};

export default Logo;
