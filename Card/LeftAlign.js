import React from 'react';
import { View, StyleSheet } from 'react-native';

const LeftAlign = (props) => {
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
    alignSelf: 'flex-start',
  },
  alignRow: {
    flexDirection: 'row',
  },
});

export default LeftAlign;
