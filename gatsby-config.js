/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    plugins: [
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                // CommonMark mode (default: true)
                commonmark: true,
                // Footnotes mode (default: true)
                footnotes: true,
                // Pedantic mode (default: true)
                pedantic: true,
                // GitHub Flavored Markdown mode (default: true)
                gfm: true,
                // Plugins configs
                plugins: [],
            },
        },
        {
            resolve: `gatsby-plugin-alias-imports`,
            options: {
                alias: {
                    '@src': 'src',
                    '@components': 'src/components',
                    '@pages': 'src/pages',
                    '@styles': 'src/styles',
                    '@data': 'src/data',
                    '@fonts': 'src/fonts',
                    '@data': 'src/data',
                },
                extensions: ['js', 'css'],
            },
        },
        {
            resolve: `gatsby-remark-prettier`,
            options: {
                // Look for local .prettierrc file.
                // The same as `prettier.resolveConfig(process.cwd())`
                usePrettierrc: true,
                // Overwrite prettier options, check out https://prettier.io/docs/en/options.html
            },
        },
        {
            resolve: `gatsby-remark-prismjs`,
            options: {
                classPrefix: 'language-js',
                inlineCodeMarker: null,
            },
        },
    ],
};
