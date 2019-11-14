import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Main = props => {
  // Mount
  useEffect(() => {}, []);

  // Render
  return (
    <View style={styles.container}>
      <Text>Main</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Main;
