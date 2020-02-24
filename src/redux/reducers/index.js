import {combineReducers} from 'redux';
import login from './login';
import alert from './alert';
import register from './register';

export default combineReducers({
  login,
  alert,
  register,
});
