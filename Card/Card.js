import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {
  const rowStyle = props.row ? styles.alignRow : {};
  const spaceBetween = props.spaceBetween ? styles.spaceBetween : {};
  return (
    <View style={[styles.container, rowStyle, spaceBetween]}>
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
  spaceBetween: {
    justifyContent: 'space-between',
  },
});

export default Card;
