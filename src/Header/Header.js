import React from 'react';
import { View, TouchableOpacity,Text, StyleSheet, Platform } from 'react-native';

const Header = (props) => {
  const textPlacement = props.textAlign ? { textAlign: props.textAlign } : {};
  const colorStyle = props.color ? { backgroundColor: props.color } : {};
  const heightStyle = props.height ? { height: props.height } : {};
  return (
    <View style={StyleSheet.flatten([styles.container, heightStyle, colorStyle, props.style])}>
      {props.leftIcon &&
      <TouchableOpacity style={[styles.iconStyle, props.iconStyle]}>
        {props.leftIcon}
      </TouchableOpacity>}
      <Text style={StyleSheet.flatten([styles.text, textPlacement, props.textStyle])}>
        {props.children}
      </Text>
      {props.rightIcon &&
      <TouchableOpacity style={[styles.iconStyle, props.iconStyle]}>
        {props.rightIcon}
      </TouchableOpacity>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 1,
    backgroundColor: '#000',
    height: Platform.OS === 'android' ? 56 : 64,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
    paddingHorizontal: 10,
  },
  iconStyle: {
    padding: 5,
  },
});

export default Header;
