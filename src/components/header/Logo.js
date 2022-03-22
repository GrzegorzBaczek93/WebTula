import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'gatsby';

import '@styles/header-logo.css';
import { StaticElementsQuery } from '@data/query/static-elements-query';

const Logo = () => {
    const { data, error } = useQuery(StaticElementsQuery)

    return (
        <Link to='/'>
            {data && (
                <img
                    src={data.allStatic_elementss.edges[0].node.brand_logo.url}
                    alt={data.allStatic_elementss.edges[0].node.brand_logo.alt}
                    className={'logo'} />
            )}
        </Link>
    );
};

export default Logo;
