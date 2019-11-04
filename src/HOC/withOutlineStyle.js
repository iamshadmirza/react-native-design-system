import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../util/colors';

const withOutlineStyle = Component => (props) => {
  const disabledStyle = props.disabled ? styles.disabledOutline : {};
  const disabledTextStyle = props.disabled ? styles.disabledText : {};
  return (
    <Component
      {...props}
      style={[styles.outlineStyle, props.style, disabledStyle]}
      textStyle={[styles.textStyle, props.textStyle, disabledTextStyle]}
      indicatorColor={props.indicatorColor || '#000'}>
      {props.children}
    </Component>
  );
};

const styles = StyleSheet.create({
  outlineStyle: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
  },
  textStyle: {
    color: '#000',
  },
  disabledOutline: {
    borderColor: colors.grey[400],
  },
  disabledText: {
    color: '#fff',
  },
});

export default withOutlineStyle;
