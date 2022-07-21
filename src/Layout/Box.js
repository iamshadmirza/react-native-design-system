import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {useThemeContext} from '../util/ThemeProvider';
import {spaces} from '../util/prop-types';

const getContainerStyle = ({theme, space, background}) => {
  return {
    padding: theme.space[space],
    background: theme.colors[background],
    alignItems: 'center',
    justifyContent: 'center',
  };
};

const Box = props => {
  const theme = useThemeContext();
  return (
    <View
      {...props}
      style={StyleSheet.flatten([
        getContainerStyle({...props, theme}),
        props.style,
      ])}>
      {props.children}
    </View>
  );
};

Box.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  background: PropTypes.string,
  space: spaces,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
    .isRequired,
};

Box.defaultProps = {
  space: 'md',
  background: 'transparent',
};

export default Box;
