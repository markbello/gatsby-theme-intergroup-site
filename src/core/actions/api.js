import {
  API_REQUEST,
  API_SUCCESS,
  API_FAILURE,
} from '../actionTypes';

export const apiRequest = (meta) => (dispatch) => {
  dispatch({
    type: API_REQUEST,
    meta,
  });

  const {
    baseUrl,
    endpoint,
    method,
    id,
  } = meta;

  return fetch(`${baseUrl}/${endpoint}/${id}`, { method })
    .then((res) => res.json())
    .then((data) => dispatch(apiSuccess({ data, meta }))) // @TODO error scenarios (404) are getting handled as success
    .catch((error) => dispatch(apiFailure({ error, meta })));
};

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

export const getGroupData = (groupId) => (dispatch) => {
  const baseUrl = 'https://www.intergroup.site';
  const endpoint = 'groups';
  const method = 'GET';
  const id = groupId;

  return dispatch(apiRequest({
    baseUrl, endpoint, method, id,
  }));
};
