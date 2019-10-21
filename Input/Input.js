import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import colors from '../util/colors';
const DEFAULT_SIZE = 14;

const Input = (props) => {
  const labelSize = props.size ? { fontSize: props.size * 0.7 } : {};
  const inputSize = props.size ?
    { fontSize: props.size, paddingVertical: props.size < 11 ? 0 : 5 } :
    {};
  const floatingStyle = props.floatingLabel && props.value.length === 0 ?
    { display: 'none' } :
  {};
  const colorStyle = props.color ? { borderBottomColor: props.color } : {};
  return (
    <View style={[styles.container, props.style]}>
      {props.label ?
        <Text style={StyleSheet.flatten([styles.label, props.labelStyle, floatingStyle, labelSize])}>
          {props.label}
        </Text> :
      null}
      <View style={[styles.inputContainer, colorStyle]}>
        {props.leftIcon ?
          <View style={styles.icon}>{props.leftIcon}</View> :
        null}
        <TextInput
          {...props}
          style={StyleSheet.flatten([styles.input, inputSize])}
          editable={!props.disabled}
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
  container: {
    padding: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.grey[400],
  },
  input: {
    flex: 1,
    padding: 5,
    borderRadius: 3,
    paddingVertical: 0,
    fontSize: DEFAULT_SIZE,
    color: '#333333',
  },
  label: {
    fontSize: DEFAULT_SIZE * 0.7,
    paddingHorizontal: 5,
    color: '#666666',
  },
  icon: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Input;
