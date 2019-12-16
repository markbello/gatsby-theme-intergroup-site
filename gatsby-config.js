/* This file allows for developing directly on the theme itself,
	 rather than mounting a child site. To use it, rename the gatsby-config.js
	 file to gatsby-config-prod.js and rename this to gatsby-config.js

	 Obviously this is not a great pattern to follow but for Gatsby ^2.18.4
	 (as of this note) this seems to be the only way to continue working on the theme
	 as an independent unit.
*/

const API_URL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:1337'
  : 'https://www.intergroup.site';

const { NODE_ENV } = process.env;

module.exports = {
  siteMetadata: { API_URL, NODE_ENV },
  plugins: [
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: 'data',
      },
    },
    {
      resolve: 'gatsby-transformer-yaml',
      options: {
        typeName: 'Group',
      },
    },
  ],
};
