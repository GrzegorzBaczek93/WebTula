import ApolloClient from 'apollo-client';
import { PrismicLink } from 'apollo-link-prismic';
import { InMemoryCache } from 'apollo-cache-inmemory';

import fetch from 'isomorphic-fetch';

export const client = new ApolloClient({
    link: PrismicLink({
        uri: process.env.GATSBY_PRISMIC_URI,
        accessToken: process.env.GATSBY_PRISMIC_API_KEY,
    }),
    cache: new InMemoryCache(),
    fetch,
});
