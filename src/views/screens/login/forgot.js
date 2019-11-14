import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Forgot = props => {
  // Mount
  useEffect(() => {}, []);

  // Render
  return (
    <View style={styles.container}>
      <Text>Forgot</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Forgot;
