import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { useThemeContext } from '../util/ThemeProvider';

const getContainerStyle = ({ theme, space, background }) => {
  return {
    padding: theme.layoutSpace[space],
    background: theme.brandColor[background],
    alignItems: 'center',
    justifyContent: 'center',
  };
};

const Box = (props) => {
  const theme = useThemeContext();
  return (
    <View style={StyleSheet.flatten([getContainerStyle({ ...props, theme }), props.style])}>
      {props.children}
    </View>
  );
};

Box.propTypes = {
  style: PropTypes.object,
  background: PropTypes.string,
  space: PropTypes.oneOf(['none', 'xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']),
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired,
};

Box.defaultProps = {
  space: 'medium',
  background: 'clearWhite',
};

export default Box;
