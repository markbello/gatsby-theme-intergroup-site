import {
  SET_ENVIRONMENT_VARIABLES,
} from '../actionTypes';

const setEnvironmentVariables = ({ API_URL, NODE_ENV }) => ({
  type: SET_ENVIRONMENT_VARIABLES,
  payload: {
    API_URL,
    NODE_ENV,
  },
});

export default setEnvironmentVariables;
