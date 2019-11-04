import React from 'react';
import { View, StyleSheet } from 'react-native';

const RightAlign = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 5,
    paddingVertical: 5,
    alignSelf: 'flex-end',
  },
});

export default RightAlign;
