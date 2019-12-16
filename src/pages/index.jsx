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
    allSite {
      nodes {
        siteMetadata {
          API_URL
          NODE_ENV
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
  const { API_URL, NODE_ENV } = data.allSite.nodes[0].siteMetadata;

  return (
    <>
      <SEO title="Home" name={name} />
      <DataLayer
        API_URL={API_URL}
        city={city}
        cmsGroupId={cmsGroupId}
        country={country}
        fellowshipAcronym={fellowshipAcronym}
        fellowshipLongName={fellowshipLongName}
        groupDescription={groupDescription}
        name={name}
        NODE_ENV={NODE_ENV}
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
    allSite: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.shape({
        siteMetadata: PropTypes.shape({
          API_URL: PropTypes.string.isRequired,
          NODE_ENV: PropTypes.string.isRequired,
        }).isRequired,
      })).isRequired,
    }).isRequired,
  }).isRequired,
};

export default IndexPage;
