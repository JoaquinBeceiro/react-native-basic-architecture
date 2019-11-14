import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const SignIn = props => {
  const {navigation} = props;
  // Mount
  useEffect(() => {}, []);

  // Render
  return (
    <View style={styles.container}>
      <Text>SignIn</Text>
      <Button
        title="Forgot"
        onPress={() => {
          const nav = navigation.navigate('ForgotPassword');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignIn;
