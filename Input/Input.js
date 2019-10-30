import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import colors from '../util/colors';
const DEFAULT_SIZE = 14;

const Input = (props) => {
  const labelSize = props.size ? { fontSize: props.size * 0.8 } : {};
  const inputSize = props.size ?
    { fontSize: props.size, paddingVertical: props.size < 11 ? 0 : 5 } :
    {};
  const floatingStyle = props.floatingLabel && props.value.length === 0 ?
    { display: 'none' } :
  {};
  const colorStyle = props.color ? { borderBottomColor: props.color } : {};
  const roundStyle = props.round ? styles.roundStyle : {};
  return (
    <View style={props.containerStyle}>
      {props.label ?
        <Text style={StyleSheet.flatten([styles.label, props.labelStyle, floatingStyle, labelSize])}>
          {props.label}
        </Text> :
      null}
      <View style={[styles.inputContainer, props.style]}>
        {props.leftIcon ?
          <View style={styles.icon}>{props.leftIcon}</View> :
        null}
        <TextInput
          editable={!props.disabled}
          {...props}
          style={StyleSheet.flatten([styles.input, colorStyle, roundStyle, inputSize])}
          placeholder={props.floatingLabel ? props.label : props.placeholder}
        />
        {props.rightIcon ?
          <View style={styles.icon}>{props.rightIcon}</View> :
        null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 5,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey[400],
    fontSize: DEFAULT_SIZE,
    color: '#333333',
  },
  label: {
    fontSize: DEFAULT_SIZE * 0.8,
    paddingHorizontal: 10,
    color: '#666666',
  },
  icon: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundStyle: {
    backgroundColor: colors.grey[300],
    borderBottomWidth: 0,
    borderRadius: 50,
    paddingHorizontal: 15,
  },
});

export default Input;
