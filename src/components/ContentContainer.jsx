import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getData as getDataAction } from '../core/actions/api';
import setEnvironmentVariablesAction from '../core/actions/utility';
import StaticContent from './StaticContent';
import Layout from './Layout';
import Alert from './Alert';
import EventsList from './EventsList';

class ContentContainer extends Component {
  componentDidMount() {
    const {
      API_URL,
      cmsGroupId,
      NODE_ENV,
      getData,
      setEnvironmentVariables,
    } = this.props;

    setEnvironmentVariables({
      API_URL,
      NODE_ENV,
    });

    const groupId = NODE_ENV === 'production'
      ? cmsGroupId
      : 1;

    getData({
      API_URL,
      endpoint: 'groups',
      id: groupId,
    });
  }

  render() {
    const {
      alert,
      city,
      cmsGroupId,
      country,
      events,
      fellowshipAcronym,
      fellowshipLongName,
      groupDescription,
      name,
      state,
    } = this.props;

    return (
      <Layout name={name}>
        {alert && (
          <Alert content={alert} />
        )}
        <StaticContent
          city={city}
          cmsGroupId={cmsGroupId}
          country={country}
          fellowshipAcronym={fellowshipAcronym}
          fellowshipLongName={fellowshipLongName}
          groupDescription={groupDescription}
          name={name}
          state={state}
        />
        {events.length > 0 && (
          <EventsList events={events} />
        )}
      </Layout>
    );
  }
}

ContentContainer.propTypes = {
  alert: PropTypes.string.isRequired,
  API_URL: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  cmsGroupId: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  NODE_ENV: PropTypes.string.isRequired,
  events: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    flyerImage: PropTypes.string,
    name: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    venueName: PropTypes.string,
  })).isRequired,
  fellowshipAcronym: PropTypes.string.isRequired,
  fellowshipLongName: PropTypes.string.isRequired,
  getData: PropTypes.func.isRequired,
  groupDescription: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  setEnvironmentVariables: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired,
};

export const mapStateToProps = (state, { cmsGroupId }) => {
  const NODE_ENV = state.getIn(['environment', 'NODE_ENV'], '');
  const groupId = NODE_ENV === 'development' ? 1 : cmsGroupId;

  return {
    alert: state.getIn(['requests', 'groups', 'GET', groupId, 'data', 'alert'], ''),
    events: state.getIn(['requests', 'groups', 'GET', groupId, 'data', 'events'], []),
  };
};

export const mapDispatchToProps = (dispatch) => ({
  getData: ({ API_URL, endpoint, id }) => dispatch(getDataAction({ API_URL, endpoint, id })),
  setEnvironmentVariables: ({ API_URL, NODE_ENV }) => dispatch(setEnvironmentVariablesAction({
    API_URL,
    NODE_ENV,
  })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContentContainer);
