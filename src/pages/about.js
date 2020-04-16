import React from 'react';

import '@styles/global.css';
import Layout from '@components/common/layout';
import Content from '@components/about/about-content';

const AboutPage = props => {
    return (
        <Layout>
            <Content />
        </Layout>
    );
};

export default AboutPage;
