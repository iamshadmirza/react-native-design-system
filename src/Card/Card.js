import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {
  const rowStyle = props.row ? styles.alignRow : {};
  return (
    <View style={[styles.container, rowStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 1,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  alignRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Card;
