import types from '../types';
import * as userService from '../../services/api/userService';
import ClientError from '../../lib/utils/exceptions';
import {setToken} from '../../lib/utils/auth';
import * as alertActions from './alert';

const setLoadingAction = () => ({
  type: types.LOGIN_SET_LOADING,
});

const login = user => ({
  type: types.LOGIN,
  user,
});

const loginFail = error => ({
  type: types.LOGIN_FAILED,
  error,
});

export const doLogin = (email, password) => dispatch => {
  dispatch(setLoadingAction());
  return userService.login(email, password).then(
    response => {
      dispatch(login(response.data.user));
      setToken(response.data.jwtToken);
      return true;
    },
    error => {
      const _message = 'The user or password was incorrect!, please try again.';
      const message =
        error instanceof ClientError ? _message : 'Internal Error';
      dispatch(loginFail(error));
      dispatch(alertActions.error(message));
    },
  );
};

export const doRegister = user => dispatch => {
  dispatch(setLoadingAction());
  return userService.register(user).then(
    () => {
      dispatch(alertActions.success('The user was reigister successfully'));
      return true;
    },
    error => {
      const message =
        error instanceof ClientError ? error.message : 'Internal Error';
      dispatch(alertActions.error(message));
    },
  );
};

export const doForgotPassword = email => dispatch => {
  dispatch(setLoadingAction());
  return userService.forgotPassword(email).then(
    () => {
      dispatch(
        alertActions.success('The email was sent, please check your mailbox.'),
      );
    },
    error => {
      const message =
        error instanceof ClientError ? error.message : 'Internal Error';
      dispatch(alertActions.error(message));
    },
  );
};

export const doResetPassword = (user, token) => dispatch => {
  dispatch(setLoadingAction());
  return userService.forgotPasswordConfirm(user, token).then(
    response => {
      dispatch(alertActions.success('The password was changed successfully!'));
      setToken(response.data.jwtToken);
    },
    error => {
      const message =
        error instanceof ClientError ? error.message : 'Internal Error';
      dispatch(alertActions.error(message));
    },
  );
};

export const doCheckValidationToken = token => dispatch => {
  dispatch(setLoadingAction());
  return userService.checkValidationToken(token).then(
    () => {},
    error => {
      const message =
        error instanceof ClientError ? error.message : 'Internal Error';
      dispatch(alertActions.error(message));
    },
  );
};
