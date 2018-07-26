module.exports = {
  siteMetadata: {
    title: 'Gatsby First Try',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-catch-links',
     {
       resolve: 'gatsby-source-filesystem',
       options: {
         path: `${__dirname}/src/pages`,
         name: 'pages'
       }
     },
     'gatsby-transformer-remark'
  ],
}
