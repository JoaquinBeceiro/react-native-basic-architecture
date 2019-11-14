import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import SignIn from '../views/screens/login';
import Forgot from '../views/screens/login/forgot';
import Reset from '../views/screens/login/reset';

const LoginNavigator = createStackNavigator(
  {
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        headerTitle: 'Sign In',
      },
    },
    ForgotPassword: {
      screen: Forgot,
      navigationOptions: {
        headerTitle: 'Forgot Password',
      },
    },
    ResetPassword: {
      screen: Reset,
      navigationOptions: {
        headerTitle: 'Reset Password',
      },
    },
  },
  {
    initialRouteName: 'SignIn',
    headerMode: 'screen',
  },
);

export default createAppContainer(LoginNavigator);
