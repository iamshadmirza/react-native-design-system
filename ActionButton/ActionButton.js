import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const ActionButton = (props) => {
  const buttonColor = props.color ? { backgroundColor: props.color } : {};
  const buttonSize = props.size || 26;
  return (
    <TouchableOpacity
      style={StyleSheet.flatten([ styles.container, buttonColor, props.style ])}
      onPress={props.onPress}
    >
      <Feather name="plus" size={buttonSize} color="#fff" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    elevation: 3,
    padding: 15,
    aspectRatio: 1,
    backgroundColor: 'orange',
    borderRadius: 75,
    bottom: 25,
    right: 25,
  },
});

export default ActionButton;
