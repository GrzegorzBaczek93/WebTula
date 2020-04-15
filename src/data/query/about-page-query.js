import gql from 'graphql-tag';

export const AboutQuery = gql`
    query {
        allAbout_pages(uid: "tula") {
            edges {
                node {
                    about_text
                    about_welcome_text
                    about_image
                }
            }
        }
    }
`;
