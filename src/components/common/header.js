import React from 'react';

import '@styles/header.css';
import Logo from '@components/header/logo';
import TabMenu from '@components/header/tab-menu';
import BurgerMenu from '@components/header/burger-menu';
import withSizeDetector from '@hoc/with-size-detector';

const Header = props => {
    const { isMobile } = props;
    return (
        <div className={`header_container`}>
            <div className={`header_buttons_container`}>
                <Logo />
                {isMobile ? <BurgerMenu /> : <TabMenu />}
            </div>
        </div>
    );
};

export default withSizeDetector(Header);
