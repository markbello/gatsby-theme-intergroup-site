import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import DataLayer from '../components/DataLayer';
import SEO from '../components/SEO';

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
    <>
      <SEO title="Home" name={name} />
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
    </>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    allGroup: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          city: PropTypes.string.isRequired,
          cmsGroupId: PropTypes.string.isRequired,
          country: PropTypes.string.isRequired,
          fellowshipAcronym: PropTypes.string.isRequired,
          fellowshipLongName: PropTypes.string.isRequired,
          groupDescription: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          state: PropTypes.string.isRequired,
        }),
      })),
    }),
  }).isRequired,
};

export default IndexPage;
