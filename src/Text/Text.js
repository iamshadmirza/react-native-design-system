import React from 'react';
import {Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {useThemeContext} from '../util/ThemeProvider';

const getTextStyle = ({
  theme,
  color,
  size,
  fontWeight,
  fontFamily,
  textAlign,
}) => {
  const style = {
    color: theme.colors[color],
    fontSize: theme.fontSize[size],
    lineHeight: theme.lineHeight[size],
    includeFontPadding: false,
    textAlignVertical: 'center',
    fontWeight,
    textAlign,
  };
  if (fontFamily) {
    style.fontFamily = fontFamily;
  }
  return style;
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
  fontFamily: PropTypes.string,
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
};

TextElement.defaultProps = {
  color: 'para',
  size: 'medium',
  fontWeight: '500',
  textAlign: 'left',
};

export default TextElement;
