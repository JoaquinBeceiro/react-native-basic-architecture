import types from '../types';

const defaultState = {
  type: null,
  message: null,
  title: null,
};

const alert = (state = defaultState, action) => {
  switch (action.type) {
    case types.ALERT_SUCCESS:
      return {
        ...state,
        type: 'alert-success',
        message: action.message,
        title: action.title,
      };
    case types.ALERT_ERROR:
      return {
        ...state,
        type: 'alert-danger',
        message: action.message,
        title: action.title,
      };
    case types.ALERT_CLEAR:
      return defaultState;
    default:
      return state;
  }
};

export default alert;
