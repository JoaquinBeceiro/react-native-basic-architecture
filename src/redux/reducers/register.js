import types from '../types';

const defaultState = {
  user: {
    username: null,
    name: null,
    lastname: null,
    email: null,
    phone: null,
  },
  loading: false,
  error: null,
};

const register = (state = defaultState, action) => {
  switch (action.type) {
    case types.REGISTER_SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.REGISTER:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.user
        },
        error: null,
        loading: false,
      };
    case types.REGISTER_FAILED:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};
export default register;
