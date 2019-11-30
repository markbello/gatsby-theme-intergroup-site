import React from 'react';
import { graphql } from "gatsby";
import ContentContainer from '../components/ContentContainer';

export const query = graphql`
  {
    allGroup {
      edges {
        node {
          city
          cmsGroupId
          country
          fellowshipAcronym
          fellowshipLongName
          groupDescription
          name
          state
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
	const {
		city,
		cmsGroupId,
		country,
		fellowshipAcronym,
		fellowshipLongName,
		groupDescription,
		name,
		state,
	} = data.allGroup.edges[0].node;

	return (
		<ContentContainer
			city={city}
			cmsGroupId={cmsGroupId}
			country={country}
			fellowshipAcronym={fellowshipAcronym}
			fellowshipLongName={fellowshipLongName}
			groupDescription={groupDescription}
			name={name}
			state={state}
		/>
	);
};

export default IndexPage;