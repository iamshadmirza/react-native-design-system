import React from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import withTheme from '../util/withTheme';

const getTextStyle = ({ theme, color, size }) => {
  return {
    color: theme.textColor[color],
    fontSize: theme.fontSize[size],
    includeFontPadding: false,
    textAlignVertical: 'center',
  };
};

const TextElement = (props) => {
  return (
    <Text style={StyleSheet.flatten([getTextStyle(props), props.style])}>
      {props.children}
    </Text>
  );
};

TextElement.propTypes = {
  style: PropTypes.object,
  children: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']),
  color: PropTypes.string,
};

TextElement.defaultProps = {
  color: 'default',
  size: 'medium',
};

export default withTheme(TextElement);
