import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/stores';
import MainNavigation from './src/navigation';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    );
  }
}

export default App;
