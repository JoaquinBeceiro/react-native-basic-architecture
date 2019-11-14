import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from '../views/screens/main';

const MainNavigator = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        headerTitle: 'Main',
      },
    },
  },
  {
    initialRouteName: 'Main',
    headerMode: 'screen',
  },
);

export default createAppContainer(MainNavigator);
