import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Onboarding = props => {
  // Mount
  useEffect(() => {}, []);

  // Render
  return (
    <View style={styles.container}>
      <Text>Onboarding</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Onboarding;
