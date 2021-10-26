import React from 'react';
import {Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {useThemeContext} from '../util/ThemeProvider';

const getTextStyle = ({theme, color, size, fontWeight}) => {
  return {
    color: theme.colors[color],
    fontSize: theme.fontSize[size],
    includeFontPadding: false,
    textAlignVertical: 'center',
    fontWeight: fontWeight,
  };
};

const TextElement = ({style, ...props}) => {
  const theme = useThemeContext();
  return (
    <Text
      {...props}
      style={StyleSheet.flatten([getTextStyle({...props, theme}), style])}>
      {props.children}
    </Text>
  );
};

TextElement.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]).isRequired,
  size: PropTypes.oneOfType([
    PropTypes.oneOf([
      'xxsmall',
      'xsmall',
      'small',
      'medium',
      'large',
      'xlarge',
      'xxlarge',
    ]),
    PropTypes.string,
  ]),
  color: PropTypes.string,
  fontWeight: PropTypes.string,
};

TextElement.defaultProps = {
  color: 'heading',
  size: 'medium',
  fontWeight: '500',
};

export default TextElement;
