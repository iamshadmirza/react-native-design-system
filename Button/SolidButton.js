import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../util/colors';

const SolidButton = (props) => {
  const buttonColor = props.color ? { backgroundColor: props.color } : {};
  const disableStyle = props.disabled ? styles.disableStyle : {};
  const buttonSize = props.size ? { fontSize: props.size, marginHorizontal: props.size * 1.5, marginVertical: props.size / 4 } : {};
  return (
    <TouchableOpacity
      onPress={props.onPress}
      disabled={props.disabled}
      style={StyleSheet.flatten([styles.container, buttonColor, props.style, disableStyle])}
      activeOpacity={0.8}>
      <Text style={StyleSheet.flatten([styles.textStyle, props.textStyle, buttonSize])}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    left: 0,
    right: 0,
    backgroundColor: '#000',
    borderRadius: 2,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
    marginHorizontal: 16 * 1.5,
    marginVertical: 16 / 4,
    fontWeight: '500',
    elevation: 3,
    paddingVertical: 10,
  },
  disableStyle: {
    backgroundColor: colors.grey[400],
  },
});

export default SolidButton;
