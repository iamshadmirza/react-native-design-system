import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TextElement = (props) => {
  const sizeStyle = props.size ? { fontSize: props.size } : {};
  const colorStyle = props.color ? { color: props.color } : {};
  return (
    <Text style={StyleSheet.flatten([styles.text, sizeStyle, colorStyle, props.style])}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    fontSize: 16,
    color: '#333',
  },
});

export default TextElement;
