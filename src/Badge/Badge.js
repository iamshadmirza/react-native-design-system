import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
const DEFAULT_SIZE = 30;

const Badge = (props) => {
  const colorStyle = props.color ? { backgroundColor: props.color } : {};
  const miniStyle = props.mini ? { minWidth: 15, height: 15 } : {};
  return (
    <TouchableOpacity
      {...props}
      onPress={props.onPress}
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

Badge.propTypes = {
  style: PropTypes.object,
  textStyle: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mini: PropTypes.bool,
  onPress: PropTypes.func,
};

Badge.defaultProps = {
  children: 0,
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: '#333',
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
