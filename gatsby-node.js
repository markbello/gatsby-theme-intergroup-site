const fs = require("fs")

// Make sure the data directory exists
exports.onPreBootstrap = ({ reporter }, options) => {
	const contentPath = options.contentPath || "data";

	if (!fs.existsSync(contentPath)) {
		reporter.info(`creating the ${contentPath} directory`);
		fs.mkdirSync(contentPath);
	}
}

// Define the "Group" type
exports.sourceNodes = ({ actions }) => {
	actions.createTypes(`
    type Group implements Node @dontInfer {
      id: ID!
      name: String!
      groupId: String!
      slug: String!
    }
  `);
}

// Define resolvers for custom fields
exports.createResolvers = ({ createResolvers }, options) => {
	const basePath = options.basePath || "/";
	// Quick-and-dirty helper to convert strings into URL-friendly slugs.
	const slugify = str => {
		const slug = str
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, "-")
			.replace(/(^-|-$)+/g, "");
		return `/${basePath}/${slug}`.replace(/\/\/+/g, "/");
	}
	createResolvers({
		Group: {
			slug: {
				resolve: source => slugify(source.name),
			},
		},
	});
}

// query for groups and create pages
exports.createPages = async ({ actions, graphql, reporter }, options) => {
	const basePath = options.basePath || "/";
	actions.createPage({
		path: basePath,
		component: require.resolve("./src/templates/Groups.jsx"),
	});
	const result = await graphql(`
    query {
      allGroup(sort: { fields: name, order: ASC }) {
        nodes {
          id
          slug
        }
      }
    }
  `);
	if (result.errors) {
		reporter.panic("error loading groups", result.errors);
		return;
	}
	const groups = result.data.allGroup.nodes;
	groups.forEach(group => {
		const slug = group.slug;
		actions.createPage({
			path: slug,
			component: require.resolve("./src/templates/Group.jsx"),
			context: {
				groupID: group.id,
			},
		});
	});
}