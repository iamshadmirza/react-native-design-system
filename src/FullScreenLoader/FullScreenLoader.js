import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

const FullScreenLoader = (props) => {
  if (props.loading) {
    return (
      <View style={[styles.container, props.style]}>
        <ActivityIndicator color={props.color} size={props.size || 'large'} />
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    elevation: 1,
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FullScreenLoader;
