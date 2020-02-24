import types from '../types';

export const success = (
  message = 'The operation was successful',
  title = 'Ok',
) => ({
  type: types.ALERT_SUCCESS,
  message,
  title,
});
export const error = (
  message = 'There was an error, please try again.',
  title = 'Error',
) => ({type: types.ALERT_ERROR, message, title});
export const clear = () => ({type: types.ALERT_CLEAR});
