import React from 'react';
import { graphql } from 'gatsby';
import DataLayer from '../components/DataLayer';

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
		<DataLayer
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