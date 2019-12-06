/* eslint-disable no-unused-vars */

/* This file allows for serving the theme as a dependency in child sites,
	 rather than as a standalone product. To use it, rename the gatsby-config.js
	 file to gatsby-config-dev.js and rename this to gatsby-config.js

	 Obviously this is not a great pattern to follow but for Gatsby ^2.18.4
	 (as of this note) this seems to be the only way to continue working on the theme
	 as an independent unit.
*/

module.exports = ({ contentPath = 'data', basePath = '/' }) => ({
  plugins: [
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: contentPath,
      },
    },
    {
      resolve: 'gatsby-transformer-yaml',
      options: {
        typeName: 'Group',
      },
    },
  ],
});
