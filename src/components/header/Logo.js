import React from 'react';
import { Link } from 'gatsby';

import '@styles/header-logo.css';
import TulamakesLogo from '@assets/tulamakes_logo.png';

const Logo = () => {
    return (
        <Link to='/'>
            <img src={TulamakesLogo} alt={'Logo'} className={'logo'} />
        </Link>
    );
};

export default Logo;
