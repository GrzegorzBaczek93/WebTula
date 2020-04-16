import ApolloClient from 'apollo-client';
import { PrismicLink } from 'apollo-link-prismic';
import { InMemoryCache } from 'apollo-cache-inmemory';

import fetch from 'isomorphic-fetch';

export const client = new ApolloClient({
    link: PrismicLink({
        uri: 'https://webtula.prismic.io/graphql',
        accessToken:
            'MC5YbzF4cmhBQUFMbFR3S2pt.bO-_ve-_ve-_ve-_ve-_vSsk77-977-977-977-9Bnzvv70O77-977-9V--_vRgOfUwcNXob77-9ZO-_ve-_vQ',
    }),
    cache: new InMemoryCache(),
    fetch,
});
