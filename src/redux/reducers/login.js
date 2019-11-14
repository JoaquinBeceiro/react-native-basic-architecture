import * as types from '../types';

const defaultState = {
  user: null,
  loading: false,
  error: null,
};

const login = (state = defaultState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        user: null,
        error: null,
        loading: true,
      };
    case types.LOGIN_SUCCEEDED:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case types.LOGIN_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case types.LOGOUT:
      return defaultState;

    default:
      return state;
  }
};
export default login;
