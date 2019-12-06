import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from '../core/reducer';
import ContentContainer from './ContentContainer';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

const DataLayer = ({
  city,
  cmsGroupId,
  country,
  fellowshipAcronym,
  fellowshipLongName,
  groupDescription,
  name,
  state,
}) => (
  <Provider store={store}>
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
  </Provider>
);

DataLayer.displayName = 'DataLayer';

DataLayer.propTypes = {
  city: PropTypes.string.isRequired,
  cmsGroupId: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  fellowshipAcronym: PropTypes.string.isRequired,
  fellowshipLongName: PropTypes.string.isRequired,
  groupDescription: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
};

export default DataLayer;
