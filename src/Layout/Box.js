import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import withTheme from '../util/withTheme';

const getContainerStyle = ({ theme, space, background }) => {
  return {
    padding: theme.space[space],
    background: theme.brandColor[background],
    alignItems: 'center',
    justifyContent: 'center',
  };
};

const Box = (props) => {
  return (
    <View style={StyleSheet.flatten([getContainerStyle(props), props.style])}>
      {props.children}
    </View>
  );
};

Box.propTypes = {
  style: PropTypes.object,
  background: PropTypes.background,
  space: PropTypes.oneOf(['none', 'xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']),
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired,
};

Box.defaultProps = {
  space: 'medium',
  background: 'clearWhite',
};

export default withTheme(Box);
