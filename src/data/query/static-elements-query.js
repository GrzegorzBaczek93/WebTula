import gql from 'graphql-tag';

export const StaticElementsQuery = gql`
    query {
        allStatic_elementss(uid: "tula") {
            edges {
                node {
                    brand_logo
                }
            }
        }
    }
`