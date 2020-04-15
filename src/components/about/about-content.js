import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { RichText } from 'prismic-reactjs';

import '@styles/about.css';
import { AboutQuery } from '@data/query/about-page-query';

const Content = () => {
    const { loading, data, error } = useQuery(AboutQuery);

    return (
        <div className='about_container'>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {data && (
                <>
                    <img
                        src={data.allAbout_pages.edges[0].node.about_image.url}
                        alt='Tula Makes'
                        className='about_image'
                    />
                    <span className='about_greeting'>
                        {RichText.render(
                            data.allAbout_pages.edges[0].node.about_welcome_text
                        )}
                    </span>
                    <span className='about_description'>
                        {RichText.render(
                            data.allAbout_pages.edges[0].node.about_text
                        )}
                    </span>
                </>
            )}
        </div>
    );
};

export default Content;
