import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Splash from '../views/screens/splash';

import MainNavigator from './MainNavigator';
import LoginNavigator from './LoginNavigator';
import OnboardingNavigator from './OnboardingNavigator';

const MainNavigation = createSwitchNavigator(
  {
    Splash: {
      screen: Splash,
    },
    Main: MainNavigator,
    Login: LoginNavigator,
    Onboarding: OnboardingNavigator,
  },
  {
    initialRouteName: 'Splash',
  },
);

export default createAppContainer(MainNavigation);
