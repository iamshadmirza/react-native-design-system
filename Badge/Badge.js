import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
const DEFAULT_SIZE = 30;

const Badge = (props) => {
  const colorStyle = props.color ? { backgroundColor: props.color } : {};
  const miniStyle = props.mini ? { minWidth: 15, height: 15 } : {};
  return (
    <TouchableOpacity
      {...props}
      style={StyleSheet.flatten([styles.container, props.style, miniStyle, colorStyle])}
      disabled={props.onPress}
    >
     {props.mini ? null :
     <Text style={StyleSheet.flatten([styles.text, props.textStyle])}>
        {props.children}
      </Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: '#000',
    minWidth: DEFAULT_SIZE,
    height: DEFAULT_SIZE,
    borderRadius: DEFAULT_SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    paddingHorizontal: DEFAULT_SIZE / 4,
    color: '#fff',
  },
});

export default Badge;
