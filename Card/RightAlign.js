import React from 'react';
import { View, StyleSheet } from 'react-native';

const RightAlign = (props) => {
  const rowStyle = props.row ? styles.alignRow : {};
  return (
    <View style={[styles.container, rowStyle]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 1,
    paddingHorizontal: 5,
    paddingVertical: 5,
    alignSelf: 'flex-end',
  },
  alignRow: {
    flexDirection: 'row',
  },
});

export default RightAlign;
