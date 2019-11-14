import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Onboarding from '../views/screens/onboarding';

const OnboardingNavigator = createStackNavigator(
  {
    Onboarding: {
      screen: Onboarding,
      navigationOptions: {
        headerTitle: 'Onboarding',
      },
    },
  },
  {
    initialRouteName: 'Onboarding',
    headerMode: 'screen',
  },
);

export default createAppContainer(OnboardingNavigator);
