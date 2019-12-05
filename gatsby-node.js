const fs = require('fs');

// Make sure the data directory exists
exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath || 'data';

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
};

// Define the "Group" type
exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
    type Group implements Node @dontInfer {
      id: ID!
      name: String!
			fellowshipAcronym: String!
			fellowshipLongName: String!
			groupDescription: String!
			city: String!
			state: String!
			country: String!
      cmsGroupId: String!
      slug: String!
    }
  `);
};
