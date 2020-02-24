import types from '../types';
import * as userService from '../../services/api/userService';
import ClientError from '../../lib/utils/exceptions';
import {setToken} from '../../lib/utils/auth';
import * as alertActions from './alert';

const setLoadingAction = () => ({
  type: types.REGISTER_SET_LOADING,
});

const register = user => ({
  type: types.REGISTER,
  ...user,
});

const registerFail = error => ({
  type: types.REGISTER_FAILED,
  error,
});

export const doRegister = (
  username,
  firstname,
  lastname,
  email,
  phone,
  password,
) => dispatch => {
  dispatch(setLoadingAction());
  return userService
    .register(username, firstname, lastname, email, phone, password)
    .then(
      response => {
        dispatch(register(response.data.user));
        return true;
      },
      error => {
        const _message =
          'The user or password was incorrect!, please try again.';
        const message =
          error instanceof ClientError ? _message : 'Internal Error';
        dispatch(registerFail(error));
        dispatch(alertActions.error(message));
      },
    );
};
