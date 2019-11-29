import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Group from "../components/Group";

export const query = graphql`
  query($groupID: String!) {
    group(id: { eq: $groupID }) {
      name
			groupId
      slug
    }
  }
`;

const GroupTemplate = ({ data: { group } }) => (
	<Layout>
		<Group {...group} />
	</Layout>
);

export default GroupTemplate