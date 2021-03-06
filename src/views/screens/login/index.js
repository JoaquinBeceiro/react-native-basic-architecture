import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Button, TouchableOpacity} from 'react-native';

const SignIn = props => {
  const {navigation} = props;
  // Mount
  useEffect(() => {}, []);

  // Render
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SignIn</Text>
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
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Onboarding')}>
          <Text>Register</Text>
        </TouchableOpacity>
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
  title: {
    fontSize: 36,
  },
  transparentButton: {
    backgroundColor: 'transparent',
  },
});

export default SignIn;
