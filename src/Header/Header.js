import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import PropTypes from 'prop-types';

const Header = (props) => {
  const textPlacement = props.textAlign ? { textAlign: props.textAlign } : {};
  const colorStyle = props.color ? { backgroundColor: props.color } : {};
  const heightStyle = props.height ? { height: props.height } : {};
  return (
    <View style={StyleSheet.flatten([styles.container, heightStyle, colorStyle, props.style])}>
      {props.leftIcon &&
        <TouchableOpacity onPress={props.onLeftIconPress} style={[styles.iconStyle, props.iconStyle]}>
          {props.leftIcon}
        </TouchableOpacity>}
      <Text style={StyleSheet.flatten([styles.text, textPlacement, props.textStyle])}>
        {props.children}
      </Text>
      {props.rightIcon &&
        <TouchableOpacity onPress={props.onRightIconPress} style={[styles.iconStyle, props.iconStyle]}>
          {props.rightIcon}
        </TouchableOpacity>}
    </View>
  );
};

Header.propTypes = {
  style: PropTypes.object,
  textStyle: PropTypes.object,
  textAlign: PropTypes.oneOf(['auto', 'left', 'center', 'right', 'justify']),
  children: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  leftIcon: PropTypes.element,
  onleftIconPress: PropTypes.func,
  rightIcon: PropTypes.element,
  onRightIconPress: PropTypes.func,
  iconStyle: PropTypes.object,
};

Header.defaultProps = {
  children: 'Home',
  textAlign: Platform.OS === 'android' ? 'left' : 'center',
};

const styles = StyleSheet.create({
  container: {
    elevation: 3,
    backgroundColor: '#333',
    width: '100%',
    height: Platform.OS === 'android' ? 56 : 64,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    paddingHorizontal: 10,
  },
  iconStyle: {
    padding: 5,
  },
});

export default Header;
