import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import GroupList from "../components/GroupList";

const GroupsTemplate = () => {
	const data = useStaticQuery(graphql`
    query {
      allGroup(sort: { fields: name, order: ASC }) {
        nodes {
          id
          name
					groupId
          slug
        }
      }
    }
  `)
	const groups = data.allGroup.nodes;

	return (
		<Layout>
			<GroupList groups={groups} />
		</Layout>
	);
}

export default GroupsTemplate