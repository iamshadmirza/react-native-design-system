import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardItem = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 2,
    margin: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});

export default CardItem;
