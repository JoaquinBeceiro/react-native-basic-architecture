import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Reset = props => {
  // Mount
  useEffect(() => {}, []);

  // Render
  return (
    <View style={styles.container}>
      <Text>Reset</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Reset;
