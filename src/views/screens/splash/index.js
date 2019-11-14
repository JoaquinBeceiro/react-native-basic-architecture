import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {getAuth} from 'utils/auth';
import {minSplashTime} from 'configs/splash';

const Splash = props => {
  // Props
  const {navigation} = props;
  // Mount
  useEffect(() => {
    checkAuth();
  }, []);

  // Methods
  const checkAuth = async () => {
    const minTime = new Promise(resolve => {
      setTimeout(resolve, minSplashTime);
    });
    const auth = getAuth();
    const {0: authData} = await Promise.all([auth, minTime]);

    if (authData) {
      // Navigate to main
      navigation.navigate('Main');
    } else {
      // Navigate to login
      navigation.navigate('Login');
    }
  };

  // Render
  return (
    <View style={styles.container}>
      <Text>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Splash;
