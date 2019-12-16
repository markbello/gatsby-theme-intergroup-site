import {
  API_REQUEST,
  API_SUCCESS,
  API_FAILURE,
} from '../actionTypes';

export const apiFailure = ({ error, meta }) => ({
  type: API_FAILURE,
  meta,
  payload: error,
});

export const apiSuccess = ({ data, meta }) => ({
  type: API_SUCCESS,
  meta,
  payload: data,
});

export const apiRequest = (meta) => (dispatch) => {
  dispatch({
    type: API_REQUEST,
    meta,
  });

  const {
    API_URL,
    endpoint,
    method,
    id,
  } = meta;

  // @TODO error scenarios (404) are getting handled as success
  return fetch(`${API_URL}/${endpoint}/${id}`, { method })
    .then((res) => res.json())
    .then((data) => dispatch(apiSuccess({ data, meta })))
    .catch((error) => dispatch(apiFailure({ error, meta })));
};

export const getData = ({
  API_URL,
  endpoint,
  id,
}) => (dispatch) => {
  const method = 'GET';

  return dispatch(apiRequest({
    API_URL,
    endpoint,
    method,
    id,
  }));
};
