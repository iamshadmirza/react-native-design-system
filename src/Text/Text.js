import React from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import withTheme from '../util/withTheme';

const TextElement = (props) => {
  const themeStyle = {
    color: props.theme.textColor[props.color],
    fontSize: props.theme.fontSize[props.size],
    includeFontPadding: false,
    textAlignVertical: 'center',
  };

  return (
    <Text style={StyleSheet.flatten([themeStyle, props.style])}>
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
