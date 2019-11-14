import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/stores';
import MainNavigation from './src/navigation';
import NavigationService from './src/navigation/NavigationServices';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigation
          ref={nav => {
            this.navigator = nav;
            NavigationService.setTopLevelNavigator(nav);
          }}
        />
      </Provider>
    );
  }
}

export default App;
