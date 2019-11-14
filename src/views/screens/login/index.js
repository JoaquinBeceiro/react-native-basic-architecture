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
      <View style={styles.buttonContainer}>
        <Button
          title="Forgot Password"
          onPress={() => navigation.navigate('ForgotPassword')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Reset Password"
          onPress={() => navigation.navigate('ResetPassword')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginVertical: 20,
  },
});

export default SignIn;
