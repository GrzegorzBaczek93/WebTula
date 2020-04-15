import React from 'react';

import '@styles/layout.css';
import Header from '@components/common/header';
import Footer from '@components/common/footer';

const Layout = ({ children }) => {
    return (
        <div className={`layout_container`}>
            <Header />
            <div className={`content_container`}>{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
