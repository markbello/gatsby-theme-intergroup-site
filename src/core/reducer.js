import { fromJS } from 'immutable';
import { get } from 'lodash';
import {
  API_REQUEST,
  API_SUCCESS,
  API_FAILURE,
} from './actionTypes';

const initialState = fromJS({
  requests: {},
});

const reducer = (state = initialState, action) => {
  const id = get(action, ['meta', 'id'], '');
  const endpoint = get(action, ['meta', 'endpoint'], '');
  const method = get(action, ['meta', 'method'], '');

  switch (action.type) {
    case API_REQUEST:
      return state
        .setIn(['requests', endpoint, method, id, 'isLoading'], true);
    case API_SUCCESS:
      return state
        .setIn(['requests', endpoint, method, id, 'isLoading'], false)
        .setIn(['requests', endpoint, method, id, 'data'], action.payload);
    case API_FAILURE:
      return state
        .setIn(['requests', endpoint, method, id, 'isLoading'], false)
        .setIn(['requests', endpoint, method, id, 'error'], action.payload);
    default:
      return state;
  }
};

export default reducer;
